const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

module.exports = mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database!"))
  .catch((err) => console.log(err));
