// Import library
const express = require("express");
const foodItemsModel = require("../models/foodItemsModel");
// Create instance of express router
const router = express.Router();
// Create an API route
router.post("/create", async function (request, response) {
  //   console.log("request.body", request.body);
  try {
    const dataBaseCreationResponse = await foodItemsModel.create(request.body);
    // console.log("dataBaseCreationResponse", dataBaseCreationResponse);
    response.send({ result: "Data added successfully" });
  } catch (error) {
    console.log("error occured", err);
  }
});

// Get the data using GET API
router.get("/list", async function (request, response) {
  try {
    const listOfFoodItems = await foodItemsModel.find({}, { __v: 0, _id: 0 });
    //   console.log("data from database", listOfFoodItems);
    response.send({ result: listOfFoodItems });
  } catch (error) {
    console.log("error occured", err);
  }
});
module.exports = router;
