const express = require("express");
const router = express.Router();
const Inquiry = require("../models/inquiry.model");
const auth = require("../libs/auth");

router
  .route("/")
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

router.delete("/:id", auth, async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.send({ status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, error: err });
  }
});

module.exports = router;
