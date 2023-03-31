const mongoose = require("mongoose");

//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
//const User = mongoose.model("user", userSchema);
//module.exports = User;
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
