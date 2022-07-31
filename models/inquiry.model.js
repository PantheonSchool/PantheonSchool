const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    contact_no: { type: String, required: true },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("inquiries", inquirySchema);
