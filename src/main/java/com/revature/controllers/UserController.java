package com.revature.controllers;

import com.revature.exceptions.InvalidCredentialsException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserService uServ;

    @Autowired
    public UserController(UserService uServ) {

        this.uServ = uServ;
    }

    @PostMapping("/user/")
    public ResponseEntity<Object> handleRegisterUser(@RequestBody LinkedHashMap<String, String> body){

        try{
            User u = uServ.registerNewUser(body.get("firstName"), body.get("lastName"), body.get("username"), body.get("email"), body.get("password"));
            return new ResponseEntity<>(u, HttpStatus.CREATED);
        } catch(Exception e){
            return new ResponseEntity<>("Invalid username or email", HttpStatus.CONFLICT);
        }
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

    @GetMapping("/user")
    public User getCurrentUser(@RequestParam(name="user_id")int userId){
        return uServ.getCurrentUserById(userId);
    }



}
