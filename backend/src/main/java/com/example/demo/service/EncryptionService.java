package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
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
        // Create an encrypted file with a unique name
        File encryptedFile = new File("encrypted-" + System.currentTimeMillis() + "-" + file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(encryptedFile)) {
            byte[] fileBytes = file.getBytes();
            byte[] keyBytes = key.getBytes();
            byte[] encryptedBytes = new byte[fileBytes.length];

            // XOR encryption logic
            for (int i = 0; i < fileBytes.length; i++) {
                encryptedBytes[i] = (byte) (fileBytes[i] ^ keyBytes[i % keyBytes.length]);
            }

            fos.write(encryptedBytes);
        }
        return encryptedFile;
    }

    // Decrypt file using XOR (for demonstration, replace this with Henon map logic later)
    public File decryptFile(MultipartFile file, String key) throws IOException {
        // Create a decrypted file with a unique name
        File decryptedFile = new File("decrypted-" + System.currentTimeMillis() + "-" + file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(decryptedFile)) {
            byte[] fileBytes = file.getBytes();
            byte[] keyBytes = key.getBytes();
            byte[] decryptedBytes = new byte[fileBytes.length];

            // XOR decryption logic
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

        // Convert key to bytes and attach it as a text file
        ByteArrayResource keyResource = new ByteArrayResource(key.getBytes());
        helper.addAttachment("key.txt", keyResource, "text/plain");

        // Send the email
        mailSender.send(message);
    }
}
