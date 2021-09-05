const express = require("express");
// Global object to club APIs related to a function together
const router = express.Router();

// console.log("router", router);
// secondary routes/paths
router.get("/", function (request, response) {
  response.send({ result: "food items API accessed" });
});

router.get("/list", function (request, response) {
  const foodItems = {
    results: [
      {
        name: "vanilla sundae",
        image:
          "https://res.cloudinary.com/dk22rcdch/image/upload/v1624901179/Hackathonmedia/ice-cream-3_renepu.jpg",
      },
      {
        name: "blueberry sundae",
        image:
          "https://res.cloudinary.com/dk22rcdch/image/upload/v1624900911/Hackathonmedia/ice-cream-2_q8n4bc.jpg",
      },
      {
        name: "icecream sandwich",
        image:
          "https://res.cloudinary.com/dk22rcdch/image/upload/v1624900597/Hackathonmedia/ice-cream-1_zk7fys.jpg",
      },
    ],
  };
  response.send(foodItems);
});

router.post("/update", function (request, response) {
  response.send({ result: "food items updated successfully" });
});
module.exports = router;
