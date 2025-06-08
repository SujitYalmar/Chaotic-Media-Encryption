import React, { useState } from 'react';
import './reciever.css';

const FileDecrypt = () => {
    const [file, setFile] = useState(null);
    const [decryptionKey, setDecryptionKey] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !decryptionKey) {
            alert('Please provide both a file and decryption key.');
            return;
        }

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

            // ✅ Success alert
            alert('File decrypted and downloaded successfully!');

            // ✅ Reset form
            setFile(null);
            setDecryptionKey('');
            document.getElementById('file').value = ''; // clear file input manually
        } catch (error) {
            console.error('Error:', error);
            alert(error.message || 'An error occurred during decryption.');
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="decrypt-container">
            <div className="login-form">
                <button
                    type="button"
                    className="back-btn"
                    onClick={() => window.history.back()}
                >
                    &#8592; Back
                </button>
                <br />
                <br />
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
