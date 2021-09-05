// Step 1: Import mongoose library
const mongoose = require("mongoose");

// Step 2: Create a schema
const foodItemsSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    collection: "foodItemsCollection",
  }
);

// Step 3: Create a model
const foodItemsModel = mongoose.model("foodItems", foodItemsSchema);

// Step 4: Export a model
module.exports = foodItemsModel;
