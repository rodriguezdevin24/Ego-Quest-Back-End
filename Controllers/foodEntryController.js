
const axios = require("axios");
const express = require("express");
const FoodEntry = require("../Models/foodEntryModel");
require("dotenv").config();
// USDA API
const API_KEY = process.env.USDA_API_KEY;


// Create a new entry
exports.createEntry = async (req, res) => {
  console.log(req.body);
  try {
    const { foodName, foodItemId, user } = req.body;
    console.log(foodName);
    const response = await axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${foodName}`
    );
    console.log(response.data);
    const food = response.data.foods.find((f) => f.fdcId == foodItemId);
    console.log(food);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    console.log(response.data);

    const nutrients = response.data.foods[0].foodNutrients;
    const newEntry = new FoodEntry({
      user: user,
      foodName: foodName,
      foodItemId: foodItemId,
      calories: nutrients.find((n) => n.nutrientName === "Energy")
        ?.value,
      carbs: nutrients.find(
        (n) => n.nutrientName === "Carbohydrate, by difference"
      )?.value,
      protein: nutrients.find((n) => n.nutrientName === "Protein")
        ?.value,
      fats: nutrients.find((n) => n.nutrientName === "Total lipid (fat)")
        ?.value,
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
    const { foodName, foodItemId, user } = req.body;
    const response = await axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${foodName}`
    );
    const nutrients = response.data.foods[0].foodNutrients;

    // Confirm the entry exists
    let entryToUpdate = await FoodEntry.findById(req.params.id);
    if (!entryToUpdate) {
      return res.status(404).json({ message: "Entry not found" });
    }

    // Check each nutrient before updating
    const updatedEntry = await FoodEntry.findByIdAndUpdate(
      req.params.id,
      {
        user: user,
        foodName: foodName,
        foodItemId: foodItemId,
        calories: nutrients.find((n) => n.nutrientName === "Energy")
          ?.value,
        carbs: nutrients.find(
          (n) => n.nutrientName === "Carbohydrate, by difference"
        )?.value,
        protein: nutrients.find((n) => n.nutrientName === "Protein")
          ?.value,
        fats: nutrients.find((n) => n.nutrientName === "Total lipid (fat)")
          ?.value,
      },
      { new: true }
    );
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
