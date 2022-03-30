const express = require("express");
const router = express.Router();
const Inquiry = require("../models/inquiry.model");

router
  .route("/api/inquiry")
  .get(async (req, res) => {
    try {
      let inquiryInfo = await Inquiry.find({});
      res.send({ status: true, data: inquiryInfo });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false });
    }
  })
  .post(async (req, res) => {
    let inquiryData = new Inquiry(req.body);
    try {
      await inquiryData.save();
      res.send({ status: true });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false });
    }
  });

module.exports = router;
