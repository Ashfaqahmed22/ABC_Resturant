package com.abc.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.abc.restaurant.model.Reservation;

@Repository
public interface ReservationRepository extends MongoRepository<Reservation, String> {
    // Additional query methods can be defined here if needed
}
