package com.revature.controllers;

import com.revature.services.ReviewService;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {

    private ReviewService rServ;

    @Autowired
    public ReviewController(ReviewService rServ) {

        this.rServ = rServ;
    }
}
