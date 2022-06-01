package com.revature.controllers;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.models.Review;
import com.revature.utils.MailingUtil;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.LinkedHashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserService uServ;
    @Autowired
    private MailingUtil m;

    @Autowired
    public UserController(UserService uServ) {

        this.uServ = uServ;
    }

    @PostMapping("/user/register")
    public ResponseEntity<Object> handleRegisterUser(@RequestBody LinkedHashMap<String, String> body){

        try{
            User u = uServ.registerNewUser(body.get("firstName"), body.get("lastName"), body.get("username"), body.get("email"), body.get("password"));
            triggerMail(u.getEmail());
            return new ResponseEntity<>(u, HttpStatus.CREATED);
        } catch(Exception e){
            return new ResponseEntity<>("Invalid username or email", HttpStatus.CONFLICT);
        }
    }

    public void triggerMail(String to){
        m.sendMail(to,
                "Welcome to Film Finder!",
                "Congratulations on registering with film finder. Check out all the fun features we have.");
    }

    @PostMapping("/user/login")
    public ResponseEntity<Object> handleLoginUser(@RequestBody LinkedHashMap<String, String> body){

        String username = body.get("username");
        String password = body.get("password");

        try{
            return new ResponseEntity<>(uServ.loginUser(username, password), HttpStatus.ACCEPTED);
        } catch(InvalidCredentialsException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @PutMapping("/user/update")
    public ResponseEntity<Object> handleUpdateUser(@RequestBody LinkedHashMap<String, String> body) {

        String userId = body.get("userId");
        String firstName = body.get("firstName");
        String lastName = body.get("lastName");
        String username = body.get("username");
        String password = body.get("password");
        String email = body.get("email");
        try{
            return new ResponseEntity<>(uServ.updateUser(Integer.parseInt(userId), firstName, lastName, username, password, email), HttpStatus.ACCEPTED);
        } catch(InvalidCredentialsException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @GetMapping("/user/{id}")
    public User getCurrentUser(@PathVariable("id")int userId){ // Could also use @RequestParam(name="user_id")int userId
        return uServ.getCurrentUserById(userId);
    }

    @PostMapping("/user/favorite")
    public ResponseEntity<Object> handleFavoriteMovie(@RequestParam(name="userId") int userId, @RequestParam(name="movieId") int movieId){
        try{
            User u = uServ.favoriteMovie(userId, movieId);
            System.out.println("USER AFTER: "+u);
            //return u;
            return new ResponseEntity<>(u, HttpStatus.CREATED);
        } catch(Exception e){
            //return new User();
            return new ResponseEntity<>("Can't get that movie", HttpStatus.CONFLICT);
        }
    }

}
