import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import this
import './sender.css';

const FileEncrypt = () => {
    const [file, setFile] = useState(null);
    const [encryptionKey, setEncryptionKey] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // <-- initialize

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !encryptionKey || !email) return;

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
            console.log('Backend response:', text);

            if (response.ok) {
                alert('File uploaded and encrypted successfully!');
                const el = document.getElementById('targetSection');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                alert('Encryption failed: ' + text);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="encrypt-container">
            <div className="login-form">
                <button
                    type="button"
                    className="back-btn"
                    onClick={() => navigate(-1)}
                >
                    &#8592; Back
                </button>
                <h2>Encrypt a File</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="file">Choose file to encrypt</label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        required
                    /><br /><hr />

                    <label htmlFor="email">Enter your email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br /><hr />

                    <label htmlFor="encryptionKey">Enter encryption key</label>
                    <input
                        type="password"
                        id="encryptionKey"
                        value={encryptionKey}
                        onChange={(e) => setEncryptionKey(e.target.value)}
                        required
                    /><br /><br />

                    <button type="submit">Encrypt File</button>
                </form>
            </div>
        </div>
    );
};

export default FileEncrypt;