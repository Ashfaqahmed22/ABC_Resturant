package com.abc.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.abc.restaurant.model.Reservation;

public interface ReservationRepository extends MongoRepository<Reservation, String> {
}
