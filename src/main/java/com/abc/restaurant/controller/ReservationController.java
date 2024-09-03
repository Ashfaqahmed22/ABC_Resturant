package com.abc.restaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.restaurant.model.Reservation;
import com.abc.restaurant.service.ReservationService;

@RestController
@RequestMapping("/api")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/reserve")
    public ResponseEntity<String> makeReservation(@RequestBody Reservation reservation) {
        try {
            reservationService.saveReservation(reservation);
            return ResponseEntity.ok("Reservation made successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to make reservation.");
        }
    }
}
