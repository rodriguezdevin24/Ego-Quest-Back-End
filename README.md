# Ego-Quest-Back-End

Welcome to the Ego Quest backend repository. Ego Quest is a caloric tracking application, and this repository specifically hosts the backend portion of the application, responsible for handling data operations and serving API endpoints.

## Overview

The backend of Ego Quest is designed with a flexible and robust architecture that supports the front-end application. It is built using Node.js and Express, and leverages MongoDB for data storage through Mongoose, a powerful Object Data Modeling (ODM) library that provides a straightforward, schema-based solution to model your application data.

## Technologies

The backend is built with the following technologies:

- Node.js
- Express
- JavaScript
- Mongoose
- MongoDB

## Mongoose Schemas

Our application uses two main schemas for data modeling: `FoodEntry` and `User`. 



## Structure

The application is organized into four main components:

- **Controllers**: This includes `foodEntryController.js` and `userController.js`. These files manage the business logic for food entries and users, respectively.

- **Database**: This folder contains `connection.js` and `seed.js`. `connection.js` manages the connection to the MongoDB database, while `seed.js` is used to populate the database with initial data.

- **Models**: This includes `foodEntryModel.js` and `userModel.js`. These files define the schema and model for food entries and users in our MongoDB database.

- **Routes**: This includes `foodEntryRoutes.js` and `userRoutes.js`. These files define the API endpoints for food entries and users, connecting the routes to the appropriate controller functions.

## API Documentation

The Ego Quest application utilizes the USDA Food Database API to fetch nutrient content data for various foods.

## Getting Started

To get the Ego Quest backend running locally:

- Clone this repository
- Run `npm install` to install all required dependencies
- Run `npm start` to start the local server

*Please add any additional instructions as necessary.*

## Deployment

Our backend is deployed on Heroku and can be accessed at the following link: *Add your Heroku deployment link here*.

Please note that the frontend and backend are hosted in separate repositories. You can find the frontend repository and its respective README at the following link: *Add your frontend GitHub repository link here*.

We hope this project provides valuable insights



