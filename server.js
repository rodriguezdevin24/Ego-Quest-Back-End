const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const foodEntryRoutes = require('./Routes/foodEntryRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to DB
// Connect to DB
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/food-entries', foodEntryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
