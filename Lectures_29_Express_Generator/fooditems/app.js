// imports of modules
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
// import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const foodItemsRouter = require("./routes/foodItems");
// instance of express
const app = express();

// middleware or plugin
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
// Routes: URLS for specific purposes
app.use("/", indexRouter);
app.use("/users", usersRouter);
// primary path/route for a particular task
app.use("/foodItems", foodItemsRouter);
module.exports = app;
