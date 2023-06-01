const mongoose = require('mongoose');

const foodEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number
  },
  protein: {
    type: Number
  },
  fats: {
    type: Number
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const foodEntryModel = mongoose.model('FoodEntry', foodEntrySchema);

module.exports = foodEntryModel;