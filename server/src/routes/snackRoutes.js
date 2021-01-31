const express = require("express");
const SnacksAPI = require("../models/SnackModel");

// // this will handle all internal routes
const router = express.Router();

/////// GET
router.get("/", (request, response) => {
  response.send("Snack route for days");
});

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
  // extract request body for use
  const requestBody = request.body;
  // then add request.body to the db collection.
  SnacksAPI.create(requestBody).then((data) => {
    console.log(data);
    console.log("Snack Created!");
  });
  response.send("this snack was added successfully");
});

/////// UPDATE
//
router.patch("/update/:id", (request, response) => {
  // extract request body for use
  const requestBody = request.body;
  const idToUpdate = request.params.id;
  // then add request.body to the db collection.
  SnacksAPI.findByIdAndUpdate(idToUpdate, requestBody).then((data) => {
    console.log(data);
    console.log("Snack Updated!");
  });
  response.send("this snack was updated successfully");
});

////// DELETE
// requires an ID
router.delete("/delete/:id", (request, response) => {
  // extract request body for use
  const idToDelete = request.params.id;
  // then add request.body to the db collection.
  SnacksAPI.findByIdAndDelete(idToDelete).then((data) => {
    console.log(data);
    console.log("Snack Deleted!");
  });
  response.send("this snack was deleted successfully");
});

// Export the router so it can be used by index.js
module.exports = router;
