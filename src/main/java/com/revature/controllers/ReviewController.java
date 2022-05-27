package com.revature.controllers;

import com.revature.models.Review;
import com.revature.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {

    private ReviewService rServ;

    @Autowired
    public ReviewController(ReviewService rServ) {

        this.rServ = rServ;
    }

//    @GetMapping("/review/{id}")
//    public ResponseEntity<Object> handleGetReviewByMovieId(@PathVariable("id")int movieId){
//
//        try{
//            List<Review> rList = rServ.getReviewByMovieId(movieId);
//            return new ResponseEntity<>(rList, HttpStatus.CREATED);
//        } catch(Exception e){
//            return new ResponseEntity<>("Can't get that movie", HttpStatus.CONFLICT);
//        }
//    }
}
