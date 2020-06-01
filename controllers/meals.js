const Meal = require('../models/meal');

module.exports = {
    getNewMealForm,
    getAllMeals,
    createNewMeal,
    showNewMeal
}

function showNewMeal(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        res.render('/meals/show');
    })
}

function createNewMeal(req, res) {
    Meal.create(req.body, function(err, newMeal) {
        console.log(req.body.name,'<--------Meal');
        res.redirect('/meals');
    })
}

function getAllMeals(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        console.log(Meal.typeof, '<-------- type of meal');
        console.log(Array.from(Meal), '<--------meal array');
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        })
    })
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}