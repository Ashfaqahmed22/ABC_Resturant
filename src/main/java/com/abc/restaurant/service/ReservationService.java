package com.abc.restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.restaurant.model.Reservation;
import com.abc.restaurant.repository.ReservationRepository;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public void saveReservation(Reservation reservation) {
        reservationRepository.save(reservation);
    }
}
