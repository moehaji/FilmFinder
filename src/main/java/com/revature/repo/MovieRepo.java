package com.revature.repo;

import com.revature.models.Movie;
import com.revature.models.Review;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer> {

    List<Movie> findByGenre(int genreId);

}
