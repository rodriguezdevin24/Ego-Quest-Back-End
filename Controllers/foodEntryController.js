const axios = require('axios');
const FoodEntry = require('../Models/foodEntryModel');
require('dotenv').config();

// Edamam API
const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;

// Create a new entry
exports.createEntry = async (req, res) => {
  try {
    const foodName = req.body.foodName;
    const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${foodName}&app_id=${API_ID}&app_key=${API_KEY}`);
    const nutrients = response.data.hints[0].food.nutrients;

    const newEntry = new FoodEntry({
      user: req.body.user,
      foodName: foodName,
      calories: nutrients.ENERC_KCAL,
      carbs: nutrients.CHOCDF,
      protein: nutrients.PROCNT,
      fats: nutrients.FAT
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await FoodEntry.find();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one entry
exports.getEntry = async (req, res) => {
  try {
    const entry = await FoodEntry.findById(req.params.id);
    if (entry == null) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an entry
exports.updateEntry = async (req, res) => {
  try {
    const foodName = req.body.foodName;
    const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${foodName}&app_id=${API_ID}&app_key=${API_KEY}`);
    const nutrients = response.data.hints[0].food.nutrients;

    const updatedEntry = await FoodEntry.findByIdAndUpdate(
      req.params.id,
      {
        user: req.body.user,
        foodName: foodName,
        calories: nutrients.ENERC_KCAL,
        carbs: nutrients.CHOCDF,
        protein: nutrients.PROCNT,
        fats: nutrients.FAT
      },
      { new: true }
    );

    if (updatedEntry == null) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an entry
exports.deleteEntry = async (req, res) => {
  try {
    const entry = await FoodEntry.findByIdAndDelete(req.params.id);
    if (entry == null) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.status(200).json({ message: "Entry has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
