const express = require('express');
const router = express.Router();
const Meal = require('../models/meal');

router.get('/', function(req, res, next) {
    Meal.find({}, function(err, allMealsFromDb) {
        res.render('index', {
            allMealsReferenceForEJS: allMealsFromDb
        });
    });
});

router.delete('/meals/:mealId', function(req, res, next) {
    Meal.find({}, function(err, allMealsFromDb) {
        Meal.findByIdAndRemove(req.params.mealId, function(err) {
            res.redirect('/');
            res.render('index', {
                allMealsReferenceForEJS: allMealsFromDb,
            });
        });
    });
})

module.exports = router;