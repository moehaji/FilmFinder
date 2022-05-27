package com.revature.services;

import com.revature.models.Movie;
import com.revature.models.Review;
import com.revature.models.User;
import com.revature.repo.MovieRepo;
import com.revature.repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ReviewService {

    private ReviewRepo rRepo;
    private MovieService mServ;

    @Autowired
    public ReviewService(ReviewRepo rRepo) {
        this.rRepo = rRepo;
    }

//    public List<Review> getReviewByMovieId(int movieId){
//        Movie m = mServ.getMovieById(movieId);
//
//        List<Review> allReviews = new ArrayList<>();
//
//        for(Review rev: m.getReviews()){
//            allReviews.add(rev);
//        }
//
//        return allReviews;
//    }
}
