const mongoose = require("mongoose");

const inquiry = new mongoose.Schema({
  fullname: { type: String, required: true },
  contact_no: { type: String, required: true },
  email: { type: String },
  message: { type: String },
});

module.exports = mongoose.model("inquiries", inquiry);
