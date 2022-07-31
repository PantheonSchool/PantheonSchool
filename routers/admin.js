const express = require("express");
const router = new express.Router();
const Admin = require("../models/admin.model");
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
  try {
    let admin = await Admin.findByCredentials(
      req.body.username,
      req.body.password
    );

    let token = await admin.generateAuthToken();

    res
      .status(200)
      .send({ status: true, username: admin.username, token: token });
  } catch (err) {
    console.log(err);
    res.status(400).send({ status: false, error: err });
  }
});

router.get("/auth", auth, (req, res) => {
  return res.status(200).send({ status: true, admin: res.locals.admin });
});

module.exports = router;
