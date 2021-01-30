// // import express
const express = require("express");
const SnacksAPI = require("../models/SnackModel");

// // this will handle all internal routes
const router = express.Router();

/////// GET
// return something simple.
router.get("/_health", (request, response) => {
  response.send("Health route is working");
});

router.get("/snack", (request, response) => {
  console.log("Snack route: ", request.body);
});

/////// CREATE / POST
// add snack object to db collection
router.post("/new-snack", (request, response) => {
  // extract request body
  const requestBody = request.body;

  // then add request.body to the db collection.
  SnacksAPI.create(requestBody).then((data) => {
    console.log(data);
    console.log("That's a heck of a snack!");
  });
  response.send("this snack was added successfully");
});

/////// UPDATE

////// DELETE

// // Export the router so it can be used by index.js
module.exports = router;
