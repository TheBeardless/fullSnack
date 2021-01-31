const express = require("express");
const SnackModel = require("../models/SnackModel");

// // this will handle all internal routes
const router = express.Router();

/////// GET //////////////d

// set a default root route
router.get("/", (request, response) => {
  response.send("Snack route for days");
});

// health check
router.get("/_health", (request, response) => {
  response.send("Health route is working");
});

// get all snacks
router.get("/all", (request, response) => {
  SnackModel.find()
    .then((data) => {
      response.send(data);
    })
    .catch(() => {
      response.status(500).send("unable to query fruits");
    });
});

/////// CREATE / POST /////////

// add snack object to db collection
router.post("/new", (request, response) => {
  // extract request body for use
  const requestBody = request.body;
  // then add request.body to the db collection.
  SnackModel.create(requestBody).then((data) => {
    console.log(data);
    console.log("Snack Created!");
    response.send(`snack was added successfully.
    ${data}`);
  });
});

/////// UPDATE //////////////
//
router.patch("/update/:id", (request, response) => {
  // extract request body for use
  const requestBody = request.body;
  const idToUpdate = request.params.id;
  // then add request.body to the db collection.
  SnackModel.findByIdAndUpdate(idToUpdate, requestBody, {
    new: true,
    upsert: true,
  }).then((data) => {
    console.log(data);
    console.log("Snack Updated!");
    response.send(`snack updated successfully:
    ${data} 
    `);
  });
});

////// DELETE ///////////////
// requires an ID
router.delete("/delete/:id", (request, response) => {
  // extract request body for use
  const idToDelete = request.params.id;
  // then add request.body to the db collection.
  SnackModel.findByIdAndDelete(idToDelete).then((data) => {
    console.log(data);
    console.log("Snack Deleted!");
    response.send(`snack deleted successfully:
    ${data} 
    `);
  });
});

// Export the router so it can be used by index.js
module.exports = router;
