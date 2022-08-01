const express = require("express");
const router = express.Router();
const News = require("../models/news.model");
const auth = require("../libs/auth");

router.post("/", auth, async (req, res) => {
  let newsData = new News(req.body);

  try {
    await newsData.save();
    res.status(200).send({ status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, error: err });
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    await News.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send({ status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, error: err });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.send({ status: true });
  } catch (err) {
    console.log(err);
    res.status(400).send({ status: false, error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    if (req.query.homepage) {
      let limitNewsData = await News.find({}).sort({ date: -1 }).limit(4);
      return res.status(200).send({ status: true, data: limitNewsData });
    }

    let newsData = await News.find({}).sort({ date: -1 });
    res.status(200).send({ status: true, data: newsData });
  } catch (err) {
    console.log(err);
    res.status(400).send({ status: false, error: err });
  }
});

module.exports = router;
