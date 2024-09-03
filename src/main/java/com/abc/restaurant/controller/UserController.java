package com.abc.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.restaurant.model.User;
import com.abc.restaurant.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Endpoint for user registration
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Check if user already exists
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username already exists!");
        }

        // Save the new user to the database
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // Endpoint for user login
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        // Retrieve user by username
        User existingUser = userRepository.findByUsername(user.getUsername());

        // Check if user exists and password matches
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            // Login successful
            return ResponseEntity.ok("{\"success\": true}");
        } else {
            // Login failed
            return ResponseEntity.status(401).body("{\"success\": false, \"message\": \"Invalid username or password\"}");
        }
    }
}
