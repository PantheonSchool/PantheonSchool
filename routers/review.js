const express = require('express');
const axios = require('axios');
const router = express.Router();
const apiURL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ3QOb4CSboDkRaFoN_O3uS7I&key=AIzaSyAfM7TmNIQ6cKBvS6yswKpVzfyE0eo99pg';

router.get("/", async (req, res) => {
  try{
      const apiData = await axios.get(apiURL);
      const reviews = apiData.data.result.reviews;
      res.status(200).send({status: true, reviews: reviews});
  } catch(err){
    console.log(err);
    res.status(400).send({status: false, error: err});
  }
});

module.exports = router;