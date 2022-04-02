const express = require('express');
const router = require('express').Router();
const { Horoscope } = require('../../models');

// get all horoscopes function
router.get('/', (req, res) => {
  Horoscope.findAll({})
    .then((dbHoroscopeData) => res.json(dbHoroscopeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
