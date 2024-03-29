const express = require("express");
const router = express.Router();
const News = require("../models/news.model");
const auth = require("../libs/auth");
const axios = require("axios");

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
  // try {
  //   if (req.query.homepage) {
  //     let limitNewsData = await News.find({}).sort({ date: -1 }).limit(4);
  //     return res.status(200).send({ status: true, data: limitNewsData });
  //   }

  //   let newsData = await News.find({}).sort({ date: -1 });
  //   res.status(200).send({ status: true, data: newsData });
  try {
    const newsData = {};
      axios.get(`https://graph.facebook.com/327589197915795/posts?fields=attachments{media},message,updated_time&limit=${req.query.homepage ? 5 : 100}&access_token=${process.env.GRAPH_API_ACCESS}`)
      .then(response => {
          // Process the posts
          const posts = response.data.data;
          const newsData = posts.filter(post => post.message).map((post) => {
            const date = new Date(post.updated_time);
            const options = { day: '2-digit', month: 'long' };
            return {
              imgURL: post?.attachments?.data[0]?.media?.image?.src || "",
              date: post.updated_time,
              title: `${date.toLocaleString('en-UK', options)} at Pantheon`,
              body: post.message,
              important: true,
            }
          })
          res.status(200).send({ status: true, data: newsData });
        })
  } catch (err) {
    console.log(err);
    res.status(400).send({ status: false, error: err });
  }
});

module.exports = router;
