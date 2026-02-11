import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, Upload, ArrowLeft, Loader2 } from 'lucide-react';
import './sender.css';

const FileEncrypt = () => {
    const [file, setFile] = useState(null);
    const [encryptionKey, setEncryptionKey] = useState('');
    const [email, setEmail] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !encryptionKey || !email) return;

        setIsProcessing(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('key', encryptionKey);
        formData.append('email', email);

        try {
            const response = await fetch('http://localhost:8080/file/encryptAndSendFile', {
                method: 'POST',
                body: formData,
            });
            const text = await response.text();
            
            if (response.ok) {
                alert('File uploaded and encrypted successfully!');
                const el = document.getElementById('targetSection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Encryption failed: ' + text);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="encrypt-page-wrapper">
            <div className="glass-encrypt-card">
                <button 
                    type="button" 
                    className="minimal-back-btn" 
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={18} /> Back
                </button>

                <div className="encrypt-header">
                    <ShieldCheck size={44} className="encrypt-accent-icon" />
                    <h2>Encrypt & Dispatch</h2>
                    <p>Secure your media using advanced chaotic mapping protocols.</p>
                </div>

                <form onSubmit={handleSubmit} className="secure-encrypt-form">
                    {/* Responsive File Zone */}
                    <div className={`file-upload-zone ${file ? 'active' : ''}`}>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                        />
                        <Upload size={24} />
                        <span>{file ? file.name : "Select File to Encrypt"}</span>
                    </div>

                    <div className="encrypt-input-group">
                        <Mail className="field-icon" size={18} />
                        <input
                            type="email"
                            placeholder="Your Authorized Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="encrypt-input-group">
                        <Lock className="field-icon" size={18} />
                        <input
                            type="password"
                            placeholder="Set Encryption Key"
                            value={encryptionKey}
                            onChange={(e) => setEncryptionKey(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={`main-encrypt-btn ${isProcessing ? 'loading' : ''}`}
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <><Loader2 className="animate-spin" size={18} /> Processing...</>
                        ) : (
                            "Encrypt and Send"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FileEncrypt;