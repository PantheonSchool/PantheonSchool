const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const admin = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

admin.pre("save", async function (next) {
  const admin = this;

  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }

  next();
});

const model = mongoose.model("admins", admin);

module.exports = model;
