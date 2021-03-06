# Film Finder

## Executive Summary

The Film Finder (FF) application allows users to rate and browse a wide variety of movies. All users will be able to register and login to personal accounts. Users can browse, filter by genre and search for specific movies. All users can create a favorites list that will be visible in their user profile. Users can also rate movies by leaving a star rating.

## Technical Requirements

- There should be a Jenkins pipeline setup, and your backend application must be running on a ASW EC2
- The frontend application should be hosted on an AWS S3 Bucket
- There must be some feature with Java Mail to send emails to your users
- Focus on testing, implement unit and ingratiation tests

## User Stories

As a user I can:

- Register.
- Login/Logout.
- Update their information
- Use Java Mail to send emails to your users
- Users can browse all movies
- Users can search for specific movies.
- Users can add a movie to their favorites list
- Users can rate a movie
- (STRETCH GOAL) Users can view a list of other user’s favorites movie lists

## How to Run

Run the following commands:

`npm install`

Then run `npm start` to start the program

## Views

### Home Page

![Home Page](./filmfinder-redux/public/homePage.png)

### Reviews

![Reviews](./filmfinder-redux/public/reviews.png)
