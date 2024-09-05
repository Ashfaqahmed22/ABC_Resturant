package com.abc.restaurant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.abc.restaurant.model.Feedback; // Import Feedback model
import com.abc.restaurant.model.Reservation;
import com.abc.restaurant.model.User;
import com.abc.restaurant.repository.FeedbackRepository; // Import FeedbackRepository
import com.abc.restaurant.repository.ReservationRepository;
import com.abc.restaurant.repository.UserRepository;

@Controller
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private FeedbackRepository feedbackRepository; // Add FeedbackRepository

    // Endpoint to render the admin page
    @GetMapping("/admin")
    public String adminPage() {
        return "admin"; // This will render the admin.html page
    }

    // Endpoint to fetch all users
    @GetMapping("/api/users")
    @ResponseBody
    public List<User> getAllUsers() {
        return userRepository.findAll(); // Retrieve all users from the database
    }

    // Endpoint to fetch all reservations
    @GetMapping("/api/reservations")
    @ResponseBody
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll(); // Retrieve all reservations from the database
    }

    // Endpoint to fetch all feedback
    @GetMapping("/api/feedback")
    @ResponseBody
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll(); // Retrieve all feedback from the database
    }
}
