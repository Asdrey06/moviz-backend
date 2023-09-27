var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");

// const TMDB_API_KEY = "f30406a0e1d378ea13e49f3ed800f0f5";
const AUTHENT_TMDB_KEY = process.env.AUTHENT_TMDB_KEY
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${AUTHENT_TMDB_KEY}`,
  },
};

router.get("/movies", (req, res) => {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc", options)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      res.json({ movies:data.results});
    });
});

module.exports = router;
