import React, { useState } from 'react';
import { Unlock, FileKey, Upload, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import './reciever.css'; // Note: Ensure the filename is correct (receiver.css)

const FileDecrypt = () => {
    const [file, setFile] = useState(null);
    const [decryptionKey, setDecryptionKey] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, processing, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !decryptionKey) return;

        setIsProcessing(true);
        setStatus('processing');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('key', decryptionKey);
        
        try {
            const response = await fetch('http://localhost:8080/file/decryptFile', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Decryption failed: ${errorText}`);
            }

            const decryptedBlob = await response.blob();
            const url = window.URL.createObjectURL(decryptedBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `decrypted-${file.name}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);

            setStatus('success');
            setTimeout(() => {
                setFile(null);
                setDecryptionKey('');
                setStatus('idle');
                setIsProcessing(false);
            }, 3000);

        } catch (error) {
            console.error('Error:', error);
            alert(error.message || 'An error occurred during decryption.');
            setIsProcessing(false);
            setStatus('idle');
        }
    };

    return (
        <div className="decrypt-page-wrapper">
            <div className="glass-decrypt-card">
                <button className="minimal-back-btn" onClick={() => window.history.back()}>
                    <ArrowLeft size={18} /> Back
                </button>

                <div className="decrypt-header">
                    {status === 'success' ? (
                        <CheckCircle size={44} className="success-glow" />
                    ) : (
                        <Unlock size={44} className="decrypt-accent" />
                    )}
                    <h2>Decrypt Media</h2>
                    <p>Enter the chaotic key to unlock your protected files.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="secure-decrypt-form">
                    <div className={`decrypt-drop-zone ${file ? 'file-active' : ''}`}>
                        <input 
                            type="file" 
                            id="file" 
                            onChange={(e) => setFile(e.target.files[0])} 
                            disabled={isProcessing}
                            required
                        />
                        <Upload size={24} />
                        <span>{file ? file.name : "Select Encrypted File"}</span>
                    </div>

                    <div className="decrypt-input-group">
                        <FileKey className="field-icon" size={18} />
                        <input 
                            type="password" 
                            placeholder="Encryption Key"
                            value={decryptionKey}
                            onChange={(e) => setDecryptionKey(e.target.value)}
                            disabled={isProcessing}
                            required
                        />
                    </div>
                    
                    <button type="submit" className={`main-decrypt-btn ${isProcessing ? 'loading' : ''}`} disabled={isProcessing}>
                        {isProcessing ? (
                            <><Loader2 className="spin" size={18} /> Processing...</>
                        ) : (
                            "Unlock & Download"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FileDecrypt;