package com.revature.services;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.models.User;
import com.revature.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.revature.utils.LoggingUtil;

@Service
@Transactional
public class UserService {

    private UserRepo uRepo;

    @Autowired
    public UserService(UserRepo ur) {
        this.uRepo = ur;
    }

    //Register
    public User registerNewUser(String first, String last, String username, String email, String password) {

        User register = new User(first, last, username, email, password);
        LoggingUtil.logger.info("User: " + register.getUsername() + " registered successfully");
        return uRepo.save(register);
    }

    public User loginUser(String username, String password) {
        User loggedIn = uRepo.findUserByUsernameAndPassword(username, password);
        if (loggedIn == null) {
            LoggingUtil.logger.error("User with username: " + username + " was not found in the database");
            throw new InvalidCredentialsException();
        } else {
            LoggingUtil.logger.info("User: " + loggedIn.getUsername() + " signed in successfully");
            return loggedIn;
        }
    }

    public User updateUser(int id, String firstName, String lastName, String username, String password, String email) {
        User updatedUser = new User(id, firstName, lastName, username, password, email);
        if (updatedUser == null) {
            LoggingUtil.logger.error("Cannot update that user");
            throw new InvalidCredentialsException();
        } else {
            LoggingUtil.logger.info("User: " + updatedUser.getUsername() + " updated successfully");
            return uRepo.save(updatedUser);
        }
    }

//    public User getCurrentUserById(int userId){
//        return uRepo.findById(userId).get();
//    }


}