const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config.env" });

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Match credentials of admin
adminSchema.statics.findByCredentials = async (username, password) => {
  let admin = await Admin.findOne({ username: username });

  if (!admin) {
    throw new Error("User not found");
  }

  let isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Incorrect Password");
  }

  return admin;
};

// Generate auth token for admin
adminSchema.methods.generateAuthToken = async function () {
  let admin = this;
  let token = jwt.sign({ username: admin.username }, process.env.SECRET, {
    expiresIn: "24h",
  });

  return token;
};

// Hash the plain text password before saving
adminSchema.pre("save", async function (next) {
  const admin = this;

  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }

  next();
});

const Admin = mongoose.model("admins", adminSchema);

module.exports = Admin;
