// FileEncryptAndSend.js
import React, { useState } from 'react';
import './sender.css'; // Import the CSS file

const FileEncryptAndSend = () => {
    // State for form fields
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState('');
    const [encryptionKey, setEncryptionKey] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for file encryption and sending here
        console.log('File:', file);
        console.log('Email:', email);
        console.log('Encryption Key:', encryptionKey);
    };

    // Handle file input
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="container">
            <div className="login-form">
                <h2>Encrypt and Send a File</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="file">Choose file to encrypt</label>
                    <input 
                        type="file" 
                        id="file" 
                        onChange={handleFileChange}
                        required
                    /><br /><br />

                    <label htmlFor="email">Recipient Email</label>
                    <input 
                        type="email" 
                        id="recipientEmail" 
                        placeholder="Enter recipient email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br /><br />

                    <label htmlFor="encryptionKey">Enter Encryption Key</label>
                    <input 
                        type="text" 
                        id="encryptionKey" 
                        placeholder="Enter encryption key" 
                        value={encryptionKey}
                        onChange={(e) => setEncryptionKey(e.target.value)}
                        required
                    /><br /><br />

                    <hr />
                    <button type="submit">Encrypt and Send</button>
                </form>
            </div>
        </div>
    );
};

export default FileEncryptAndSend;
