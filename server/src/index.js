const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session"); // for cookies

// connect mongoDB/mongoose here.
mongoose.connect("mongodb://localhost:27017/fullSnack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// initialise the app
const app = express();

// backend port
const port = 3000;

// import all routers here.
const internalRouter = require("./routes/internalRoutes");
const snackRouter = require("./routes/snackRoutes");

// express.use middleware that interprets json files.
app.use(express.json());
// app.use(cors);

// tell express that it needs to use the routers we have intialised
app.use("/", internalRouter);
app.use("/snacks", snackRouter);

// quality of life, confirm port response.
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
