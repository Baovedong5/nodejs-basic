const mongoose = require("mongoose");

//scheme: format shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

// model: copy of scheme
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
