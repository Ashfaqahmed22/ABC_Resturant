package com.abc.restaurant.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.abc.restaurant.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);

    public boolean existsByUsername(String username);
}
