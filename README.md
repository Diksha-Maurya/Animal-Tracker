# ProgrammingChallenge - 🔥 Livestock Movement Tracker 🔥

# Table of Contents  
- [Why Choose Livestock Movement Tracker!](#-why-choose-livestock-movement-tracker)
- [Walkthrough](#walkthrough)
- [Application Screenshots:](#application-screenshots)
  - [Sign Up Page](#sign-up-page)
  - [Login Page](#login-page)
  - [Dashboard](#dashboard)
- [Project Techstack](#project-techstack)
- [Technical Overview:](#technical-overview)
- [Successful Usecases](#successful-usecases)
- [Troubleshooting](#troubleshooting)



## ** Why choose Livestock Movement Tracker App!**

Livestock Movement Tracker: In the dynamic landscape of food animal systems, the Livestock Movement Tracker app stands out as a reliable and efficient solution for managing and recording the movement of animals between farms. 

# Walkthrough

Link to the implementation video of the Career Flow application: 



# Application Screenshots
 
## Sign Up Page

## Login Page

## Dashboard

## Table


# Project Techstack

Frontend: Angular </br>
Backend: Spring Boot </br>
Database: PostgreSQL </br>

# Technical Overview

This application is a Angular-based web application that runs in the user's web browser. It provides the following key features:

User Authentication: Upon logging in, the application creates and stores tokens locally on the user's machine to maintain user sessions securely.

Backend Server: The application is powered by a Spring Boot server, handling various user requests and seamlessly interacting with a PostgreSQL database. This server ensures efficient functionality and persistent data storage, providing a robust foundation for the application's backend operations.

With these components working together, the application delivers a secure and feature-rich experience to its users.


# Successful Usecases/Application Flow

1. First time users can sign-up first while providing username, email, role and password. Once done, user will get a message saying - 'User Created Successfully'. Next, user can login and access the application.

2. Returning users, can directly login with username and password.

3. Authentication: If any user tries to login without/incorrect email or password, and directly clicks on Login Button, a popup will appear notifying user that to enter correct details.

4. Once authentication is done, user is redirected to dashboard showing map with pins indicating origin and destination details.

5. At the top of dashboard, there is navigation bar with menu item - 'table'. On click of that, user can see origin and destination table in tabular form.

6. If user tries to manipulate url, he will be redirected to login page. Also, if user tries to access dashboard url without authetication, it will be again redirected to login-page


# Troubleshooting

