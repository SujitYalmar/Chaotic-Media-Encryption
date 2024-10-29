package com.example.demo1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class EncryptionService {

    @Autowired
    private JavaMailSender mailSender;

    // Encrypt file using XOR (for demonstration, replace this with Henon map logic later)
    public File encryptFile(MultipartFile file, String key) throws IOException {
        File encryptedFile = new File("encrypted-" + file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(encryptedFile)) {
            byte[] fileBytes = file.getBytes();
            byte[] keyBytes = key.getBytes();
            byte[] encryptedBytes = new byte[fileBytes.length];

            for (int i = 0; i < fileBytes.length; i++) {
                encryptedBytes[i] = (byte) (fileBytes[i] ^ keyBytes[i % keyBytes.length]);
            }

            fos.write(encryptedBytes);
        }
        return encryptedFile;
    }

    // Decrypt file using XOR (for demonstration, replace this with Henon map logic later)
    public File decryptFile(MultipartFile file, String key) throws IOException {
        File decryptedFile = new File("decrypted-" + file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(decryptedFile)) {
            byte[] fileBytes = file.getBytes();
            byte[] keyBytes = key.getBytes();
            byte[] decryptedBytes = new byte[fileBytes.length];

            for (int i = 0; i < fileBytes.length; i++) {
                decryptedBytes[i] = (byte) (fileBytes[i] ^ keyBytes[i % keyBytes.length]);
            }

            fos.write(decryptedBytes);
        }
        return decryptedFile;
    }

    // Send an email with the encrypted file and key
    public void sendFileWithKey(String recipientEmail, File encryptedFile, String key) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        // Set recipient and subject
        helper.setTo(recipientEmail);
        helper.setSubject("Encrypted File and Key");
        helper.setText("Here is the encrypted file and the key required to decrypt it.");

        // Attach the encrypted file
        helper.addAttachment(encryptedFile.getName(), encryptedFile);

        // Optionally, attach the key as a text file
        helper.addAttachment("key.txt", new jakarta.activation.DataSource() {
            @Override
            public java.io.InputStream getInputStream() throws IOException {
                return new java.io.ByteArrayInputStream(key.getBytes());
            }

            @Override
            public java.io.OutputStream getOutputStream() throws IOException {
                throw new IOException("No output stream available");
            }

            @Override
            public String getContentType() {
                return "text/plain";
            }

            @Override
            public String getName() {
                return "key.txt";
            }
        });

        // Send the email
        mailSender.send(message);
    }
}
