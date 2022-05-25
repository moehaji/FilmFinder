package com.revature.services;

import com.revature.repo.ReviewRepo;
import com.revature.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReviewService {

    private ReviewRepo rRepo;

    @Autowired
    public ReviewService(ReviewRepo rRepo) {
        this.rRepo = rRepo;
    }
}
