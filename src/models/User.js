const mongoose = require("mongoose");

//scheme: format shape data
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
});

// model: copy of scheme
const User = mongoose.model("user", userSchema);

module.exports = User;
