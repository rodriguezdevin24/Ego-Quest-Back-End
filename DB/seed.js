const mongoose = require("mongoose");
const User = require("../Models/userModel");
const FoodEntry = require("../Models/foodEntryModel");
require("dotenv").config({ path: "../.env" });


// Connect to DB
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log('Connected to DB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

// Add your own user data
const users = [
  { name: "John Doe", email: "john@example.com", password: "john123" },
  // add more users
];

// Function to seed users to DB
async function seedUsers() {
  try {
    for (let user of users) {
      let newUser = new User(user);
      await newUser.save();
    }
    console.log("Users seeded to DB");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect(); // disconnect from the database
  }
}

seedUsers();
