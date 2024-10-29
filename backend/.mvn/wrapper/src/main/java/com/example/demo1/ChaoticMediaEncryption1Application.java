package com.example.demo1;

import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@ComponentScan(basePackages = {"com.example.demo1.controller", "com.example.demo1.service"})
public class ChaoticMediaEncryption1Application {
    public static void main(String[] args) {
        SpringApplication.run(ChaoticMediaEncryption1Application.class, args);
    }
}
