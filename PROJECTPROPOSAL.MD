# Gains log Proposal: Calorie Tracker App

## Introduction and Overview
The Calorie Tracker app is a web application designed to help users track their daily calorie intake and make informed nutritional choices. With an intuitive user interface and robust functionality, the app aims to simplify the process of monitoring and managing one's diet. This proposal outlines the key features, API integration, data model, and user stories for the app.

## API Idea
The Calorie Tracker app will serve data using a RESTful API with the following resources and routes:

### User Resource:
- **GET /api/users**: Retrieve a list of all users.
- **GET /api/users/:id**: Retrieve a specific user's information.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user's information.
- **DELETE /api/users/:id**: Delete a user.

### Food Entry Resource:
- **GET /api/foodentries**: Retrieve all food entries for a user.
- **GET /api/foodentries/:id**: Retrieve a specific food entry.
- **POST /api/foodentries**: Create a new food entry.
- **PUT /api/foodentries/:id**: Update a food entry.
- **DELETE /api/foodentries/:id**: Delete a food entry.

## Choice of 3rd Party API
For nutritional information, we will integrate the [Open Food Facts API](https://world.openfoodfacts.org/data). This API provides comprehensive nutritional data for a wide range of food items. By leveraging their API, we can retrieve accurate and up-to-date information such as calories, macronutrients, and more.

## Data Model and Seeding
The app will have the following data models:

### User Model:
- Name (String)
- Email (String)
- Password (String)

### Food Entry Model:
- User ID (Reference to User Model)
- Food Name (String)
- Calories (Number)
- Timestamp (Date)

To seed the database, we will create a seeding script that populates the User and Food Entry models with sample data for testing and demonstration purposes.

## Routes for Full CRUD
To implement full CRUD functionality, the following routes will be created:

- User Routes: GET /api/users, GET /api/users/:id, POST /api/users, PUT /api/users/:id, DELETE /api/users/:id
- Food Entry Routes: GET /api/foodentries, GET /api/foodentries/:id, POST /api/foodentries, PUT /api/foodentries/:id, DELETE /api/foodentries/:id

## User Stories: MVP (Most Viable Project)
- As a user, I want to be able to track my daily food intake by adding food entries with their respective calories.
- As a user, I want to view my food entries and see the total calories consumed for the day.
- As a user, I want the ability to update or delete existing food entries.
- As a user, I want to be able to search for food items and automatically get their nutritional information from the 3rd party API.


## User Stories: Stretch Goals
- As a user, I want to be able to create an account and log in.
- As a user, I want to be able to track my weight.
- As a user, I want the app to be able to give me a calorie plan based on my height, weight, gender, and activity.
- As a user, I want to view detailed nutritional breakdowns of my food entries, including macronutrients.
- As a user, I want to be able to set calorie goals
- As a user, I want to be able to get linked to Task Buckets!
