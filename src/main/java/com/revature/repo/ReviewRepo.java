package com.revature.repo;

import com.revature.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review, Integer> {
}
