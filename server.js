const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan'); // Add this at the top

const app = express();
app.use(cors());
app.use(morgan('dev'));           // Add this after app.use(cors())
app.use(express.json());

// Connect to Docker Mongo on port 27018
mongoose.connect('mongodb://localhost:27018/mangodb')
    .then(() => console.log('Connected to Mangodb Container!'))
    .catch(err => console.error('Connection error', err));

// Schema includes all fields for our Recipe Cards
const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  temp: String,   // Hot or Cold
  flavor: String, // Sweet or Spicy
  emoji: String,
  image: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// SEEDING LOGIC: Re-populates if DB is empty
const seedDB = async () => {
  const count = await Recipe.countDocuments();
  if (count === 0) {
    const recipes = [
      {
        title: "Mango Rasam",
        description: "Tangy and spicy South Indian soup.",
        temp: "Hot", flavor: "Spicy", emoji: "🔥🌶️",
        image: "images/rasam.jpeg"
      },
      {
        title: "Mango Halwa",
        description: "Rich, warm, and velvety dessert.",
        temp: "Hot", flavor: "Sweet", emoji: "🔥🧁",
        image: "images/halwa.jpg"
      },
      {
        title: "Mango Ice Cream",
        description: "Classic creamy summer treat.",
        temp: "Cold", flavor: "Sweet", emoji: "❄️🧁",
        image: "images/icecream.jpg"
      },
      {
        title: "Mango Tajín Sorbet",
        description: "Chilly treat with a chili kick.",
        temp: "Cold", flavor: "Spicy", emoji: "❄️🌶️",
        image: "images/sorbet.jpg"
      }
    ];
    await Recipe.insertMany(recipes);
    console.log("Database Seeded with 4 Mango Masterpieces!");
  }
};
seedDB();

// --- API ROUTES ---

// READ: Get all recipes
app.get('/api/recipes', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// CREATE: Add a new recipe
app.post('/api/recipes', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: "Failed to create recipe" });
  }
});

// DELETE: Remove a recipe by ID
app.delete('/api/recipes/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

app.listen(3000, () => console.log('Backend API running on http://localhost:3000'));