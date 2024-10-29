import React, { useState } from 'react';
import './reciever.css';  // Importing the CSS file

const FileDecrypt = () => {
    const [file, setFile] = useState(null);
    const [decryptionKey, setDecryptionKey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('File to decrypt:', file);
        console.log('Decryption Key:', decryptionKey);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="container">
            <div className="login-form">
                <h2>Decrypt a File</h2>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="file">Choose file to decrypt</label>
                    <input 
                        type="file" 
                        id="file" 
                        onChange={handleFileChange}
                        required
                    /><br /><hr />

                    <label htmlFor="decryptionKey">Enter decryption key</label>
                    <input 
                        type="password" 
                        id="decryptionKey" 
                        value={decryptionKey}
                        onChange={(e) => setDecryptionKey(e.target.value)}
                        required
                    /><br /><br />
                    
                    <button type="submit">Decrypt File</button>
                </form>
            </div>
        </div>
    );
};

export default FileDecrypt;
