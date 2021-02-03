const { Db } = require("mongodb");
const mongoose = require("mongoose");

const DbSchema = mongoose.Schema;

const userSchema = DbSchema({
  username: {
    type: String,
    unique: [true, "Username already exists."],
    required: [true, "Username required"],
  },
  password: {
    type: String,
    min: [6, "Password must be at least 6 characters"],
    required: [true, "Password required"],
  }, // thanks Jonno
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
