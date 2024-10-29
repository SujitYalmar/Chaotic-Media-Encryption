package com.example.demo1.controller;

import com.example.demo1.service.EncryptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.mail.javamail.JavaMailSender;

import jakarta.mail.MessagingException;
import java.io.File;
import java.io.IOException;
@RestController
@RequestMapping("/file")
public class FileController {

    @Autowired
    private EncryptionService encryptionService;

    @PostMapping("/encryptAndSendFile")
    public ResponseEntity<String> encryptAndSendFile(@RequestParam MultipartFile file,
                                                     @RequestParam String key,
                                                     @RequestParam("email") String recipientEmail) {
        try {
            // Encrypt the file
            File encryptedFile = encryptionService.encryptFile(file, key);

            // Send the encrypted file and key via email
            encryptionService.sendFileWithKey(recipientEmail, encryptedFile, key);

            return ResponseEntity.ok("File encrypted and sent successfully to: " + recipientEmail);
        } catch (IOException | MessagingException e) {
            return ResponseEntity.status(500).body("Error occurred: " + e.getMessage());
        }
    }

    @PostMapping("/decryptFile")
    public ResponseEntity<String> decryptFile(@RequestParam MultipartFile file, @RequestParam String key) {
        try {
            // Call decryption service to decrypt the file
            File decryptedFile = encryptionService.decryptFile(file, key);
            return ResponseEntity.ok("File decrypted successfully: " + decryptedFile.getName());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("File decryption failed: " + e.getMessage());
        }
    }
}
