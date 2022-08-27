const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  imgURL: { type: String },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  body: { type: String },
  important: { type: Boolean },
});

module.exports = mongoose.model("News", newsSchema);
