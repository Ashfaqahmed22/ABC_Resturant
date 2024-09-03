package com.abc.restaurant.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/worker")
public class WorkerController {
    @GetMapping
    public String workerDashboard(Model model) {
        return "worker"; // Make sure this template exists
    }
}
