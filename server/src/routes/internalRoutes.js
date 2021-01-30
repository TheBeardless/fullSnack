// // import express
const express = require("express");

// // this will handle all internal routes
const router = express.Router();

// // routes
router.get("/", (request, response) =>
  response.send("This is the backend server")
);

router.get("/_health", (request, response) => response.send("OK"));

// // Export the router so it can be used by index.js
module.exports = router;
