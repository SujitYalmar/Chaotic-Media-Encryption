import React, { useState } from 'react';
import { Lock, Mail, Upload, ShieldCheck, Loader2, CheckCircle } from 'lucide-react'; 
import './sender.css'; 

const FileEncryptAndSend = () => {
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState('');
    const [encryptionKey, setEncryptionKey] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate the chaotic encryption delay
        setTimeout(() => {
            console.log('File Encrypted with Chaotic Mapping');
            setIsProcessing(false);
            setIsDone(true);
            
            // Reset after 3 seconds
            setTimeout(() => setIsDone(false), 3000);
        }, 2000);
    };

    return (
        <div className="encryption-wrapper">
            <div className="glass-card">
                <div className="header-section">
                    {isDone ? (
                        <CheckCircle size={40} className="icon-success" />
                    ) : (
                        <ShieldCheck size={40} className="icon-accent" />
                    )}
                    <h2>{isDone ? "Securely Dispatched" : "Secure File Encryption"}</h2>
                    <p>
                        {isDone 
                            ? "Your media has been encrypted and sent." 
                            : "Files are encrypted using chaotic mapping before transmission."}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="secure-form">
                    <div className={`file-drop-zone ${file ? 'has-file' : ''}`}>
                        <input 
                            type="file" 
                            onChange={(e) => setFile(e.target.files[0])} 
                            disabled={isProcessing}
                            required 
                        />
                        <Upload size={24} />
                        <span>{file ? file.name : "Click or Drag to Upload File"}</span>
                    </div>

                    <div className="input-group">
                        <Mail className="input-icon" size={18} />
                        <input 
                            type="email" 
                            placeholder="Recipient Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isProcessing}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <Lock className="input-icon" size={18} />
                        <input 
                            type="password" 
                            placeholder="Set Encryption Key"
                            value={encryptionKey}
                            onChange={(e) => setEncryptionKey(e.target.value)}
                            disabled={isProcessing}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={`btn-encrypt ${isProcessing ? 'loading' : ''}`}
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <><Loader2 className="spinner" size={18} /> Processing...</>
                        ) : (
                            "Encrypt & Dispatch"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FileEncryptAndSend;