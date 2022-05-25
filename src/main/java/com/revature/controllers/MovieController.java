package com.revature.controllers;

import com.revature.services.MovieService;
import com.revature.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    private MovieService mServ;

    @Autowired
    public MovieController(MovieService mServ) {
        this.mServ = mServ;
    }
}
