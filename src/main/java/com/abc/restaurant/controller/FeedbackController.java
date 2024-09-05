package com.abc.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.restaurant.model.Feedback;
import com.abc.restaurant.repository.FeedbackRepository;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping
    public String submitFeedback(@RequestBody Feedback feedback) {
        if (feedback.getName() == null || feedback.getEmail() == null || feedback.getMessage() == null) {
            return "Please fill in all fields.";
        }
        feedbackRepository.save(feedback);
        return "Feedback submitted successfully!";
    }
}