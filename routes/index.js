const express = require('express');
const router = express.Router();
const passport = require('passport');
const Meal = require('../models/meal');

router.get('/', function(req, res, next) {
  Meal.find({}, function(err, allMealsFromDb) {
    res.render('index', {
        allMealsReferenceForEJS: allMealsFromDb
    });
  });
});

module.exports = router;
