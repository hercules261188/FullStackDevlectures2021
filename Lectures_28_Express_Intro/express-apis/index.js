// Step 1: Import express module
const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/getDay", (request, response) => {
  response.send("Today is Sunday");
});

app.post("/storeCarInformation", (request, response) => {
  console.log("request", request.body);
  fs.writeFile("carDetails.json", JSON.stringify(request.body), (err) => {
    // Checking for errors
    if (err) throw err;

    console.log("Done writing"); // Success
    response.status(200).send({ response: "Data recieved successfully" });
  });
});

app.get("/getCarInfo", (request, response) => {
  fs.readFile("carDetails.json", (err, data) => {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const carInformation = JSON.parse(data);

    console.log("carInformation", carInformation); // Print users
    response.status(200).send(carInformation);
  });
});

app.put("/updateCarInformation", (request, response) => {
  console.log("request", request.body);
  fs.readFile("carDetails.json", (err, data) => {
    // Check for errors
    if (err) throw err;
    // Converting to JSON
    const carInformation = JSON.parse(data);
    carInformation.carName = request.body.carName;
    fs.writeFile("carDetails.json", JSON.stringify(carInformation), (err) => {
      // Checking for errors
      if (err) throw err;

      console.log("Done writing"); // Success
      response.status(200).send({ result: "Data updated successfully" });
    });
  });
});

app.delete("/deleteCarInformation", (request, response) => {
  carInformation = {};
  fs.unlink("carDetails.json", function (err) {
    if (err) return console.log(err);
    response.status(200).send({ result: "Data cleared successfully" });
  });
});

// Step 2: Listening on port 8080
app.listen(port, () => {
  console.log("Server has been listening on port " + port);
});
