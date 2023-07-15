const mongoose = require("mongoose");

//scheme: format shape data
const kittySchema = new mongoose.Schema({
  name: String,
});

// model: copy of scheme
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;
