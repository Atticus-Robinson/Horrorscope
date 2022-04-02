const router = require("express").Router();
const { Horoscope } = require("../../models");

// get all comments function
router.get("/", (req, res) => {
  Horoscope.findAll({})
    .then((dbHoroscopeData) => res.json(dbHoroscopeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});