const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
// Step 1: Import mongoose library
const mongoose = require("mongoose");

// Step 2: Connection to mongodb atlas server
/**
 * First param: Connection string to connect
 * Second param: DB options
 * Third param: Callback function to check connection errors
 */
mongoose.connect(
  process.env.DB_HOST_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("Connection to database successful");
    }
  }
);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const foodItemsRouter = require("./routes/foodItems");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/foodItems", foodItemsRouter);
module.exports = app;
