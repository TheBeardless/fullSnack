const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session"); // though I can't remember why.

// import all routers here.

// connect mongoDB/mongoose here.

// initialise the app
const app = express();

// backend port
const port = 3000;

// app (express) middleware usage
app.use(express.json());

// paste something to the backend page.
app.get("/", (request, response) =>
  response.send("This is the backend server")
);

// tell express that it needs to use the routers we have intialised

// quality of life, confirm port response.
app.listen(port, () =>
  console.log(`fruit app listening at http://localhost:${port}`)
);
