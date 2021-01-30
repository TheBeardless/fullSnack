const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session"); // for cookies

// import all routers here.
// const internalRouter = require("./routes/internalRoutes");

// // connect mongoDB/mongoose here.
mongoose.connect("mongodb://localhost:27017/fullSnack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// initialise the app
const app = express();

// backend port
const port = 3000;

// app (express) middleware usage
app.use(express.json());

// paste something to the backend / index route page.
app.get("/", (request, response) =>
  response.send("This is the index.js backend server")
);

// tell express that it needs to use the routers we have intialised
// app.use("/internal", internalRouter);

// quality of life, confirm port response.
app.listen(port, () =>
  console.log(`fruit app listening at http://localhost:${port}`)
);
