# Programming Challenge - 🔥 Livestock Movement Tracker 🔥

# Table of Contents  
- [Why Choose Livestock Movement Tracker!](#-why-choose-livestock-movement-tracker)
- [Walkthrough](#walkthrough)
- [Application Screenshots:](#application-screenshots)
  - [Sign Up Page](#sign-up-page)
  - [Login Page](#login-page)
  - [Dashboard](#dashboard)
  - [Table](#table)
- [Project Techstack](#project-techstack)
- [Technical Overview:](#technical-overview)
- [Successful Usecases](#successful-usecases)
- [Instruction to run](#instruction-to-run)



## ** Why choose Livestock Movement Tracker App!**

Livestock Movement Tracker: In the dynamic landscape of food animal systems, the Livestock Movement Tracker app stands out as a reliable and efficient solution for managing and recording the movement of animals between farms. 

# Walkthrough

Link to the implementation video of the Career Flow application: 



# Application Screenshots
 
## Sign Up Page

![Sign-up](https://github.com/Diksha-Maurya/Programming-Challenge-Lab/assets/27075012/e0c24f29-c1c0-4f17-9f2a-19e81cbaa91f)


## Login Page

![Login](https://github.com/Diksha-Maurya/Programming-Challenge-Lab/assets/27075012/d8d18bb0-e123-4ca4-94fb-23ef000b2e85)


## Dashboard![dashboard](https://github.com/Diksha-Maurya/Programming-Challenge-Lab/assets/27075012/9dbcb5da-44ca-41ac-97a9-f89cbfa0bb17)




## Table![table](https://github.com/Diksha-Maurya/Programming-Challenge-Lab/assets/27075012/24075a28-02f6-4ef6-9656-d27a8f4630db)




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

# Instruction to run
 
## To Set-Up Frontend(in Angular):

### Setup Angular:

Install Node.js and npm from official website: ```https://nodejs.org/en``` .

Install AngularCLI: ```npm install -g @angular/cli```.

Installation can be verified by running commands: ```ng --version```.

### Frontend Setup
Navigate to pg_frontend folder by command: ```cd pg_frontend```.

Install Dependencies: ```npm install```.

Run Angular Development Server: ```ng serve```.

After successful frontend setup, application can be accessed with ```http://localhost:4200```.

## To Setup Backend(in Sprintboot):

### Setup Java

If Java not installed, then it can be setup by official Java SE downloads page: ```https://www.oracle.com/java/technologies/downloads/```.

### Backend Project Setup

Open backend folder ```pg_backend``` in ```IntelliJ IDEA Community Edition 2023.3.2```.

Write postgres correct ```username``` and ```password``` in ```src/main/resources/application.properties4``` and correct database name ```programmingchallenge```.

Right Click on ```SpringBootSecurityJwtApplication``` and then ```Run```.

This will start Spring Boot Application on ```http://localhost:8080```.


## Setup Database 

All tables can be accessed in ```Tables``` folder which can be imported one-by-one into Postgres ```programmingchallenge``` databaseby using copy command:
``` \COPY your_table_name FROM 'C:/data/your_data.csv' WITH CSV HEADER DELIMITER ','; ```



