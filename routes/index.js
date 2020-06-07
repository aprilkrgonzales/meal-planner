const express = require('express');
const router = express.Router();
//const indexController = require('../controllers/index');
const mealsController = require('../controllers/meals');
const Meal = require('../models/meal');


// router.get('/', mealsController.getAllMeals);


//const mealsController = require('../controllers/meals');

router.get('/', function(req, res, next) {
    Meal.find({}, function(err, allMealsFromDb) {
        //console.log(allMealsFromDb, '<*<*<*<------ CONSOLE LOG');
        //console.log(Meal.id, '<<<<------ CONSOLE LOG');
        res.render('index', {
            allMealsReferenceForEJS: allMealsFromDb
        });
    });
});


module.exports = router;