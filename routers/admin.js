const express = require("express");
const router = new express.Router();
const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../libs/auth");

require("dotenv").config({ path: "../config.env " });

router.post("/register", async (req, res) => {
  let admin = new Admin(req.body);
  try {
    await admin.save();
    res.status(201).send({ status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, error: err });
  }
});

router.post("/login", async (req, res) => {
  let admin = await Admin.findOne({ username: req.body.username });
  if (!admin) {
    return res.status(401).send({ status: false, error: "username not found" });
  }

  let isPassCorrect = await bcrypt.compare(req.body.password, admin.password);
  if (isPassCorrect) {
    const token = await jwt.sign(
      {
        username: admin.username,
      },
      process.env.SECRET
    );

    return res
      .status(200)
      .send({ status: true, username: admin.username, token: token });
  } else {
    return res.status(401).send({ status: false, error: "Wrong Password" });
  }
});

router.get("/auth", auth, (req, res) => {
  return res.status(200).send({ status: true, admin: res.locals.admin });
});

module.exports = router;
