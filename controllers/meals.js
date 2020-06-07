const Meal = require('../models/meal');

module.exports = {
    getNewMealForm,
    getAllMeals,
    createNewMeal,
    showNewMeal,
    deleteOneMeal,
    updateMeal,
    deleteOneItem
}

function deleteOneItem(req, res) {    
    Meal.findOne({'_id': req.params.mealId}, function(err, meal) {        
        meal.groceries.remove(req.params.itemId);
        meal.save(function (err) {
            res.redirect('/meals');
        });
    })
}

function deleteOneMeal(req, res) {
   Meal.findByIdAndRemove(req.params.id, function(err) {
       res.redirect('/meals');
   })
}

function updateMeal(req, res) {
    req.body.done = !!req.body.done;
    Meal.update(req.params.id, req.body);
    res.redirect(`/meals/${req.params.id}`);
}

function showNewMeal(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        res.render('/meals/show');
    })
}

function createNewMeal(req, res) {
    req.body.groceries = req.body.groceries.split(',').map(function(item) {
        return {content: item.trim()};
    });
    Meal.create(req.body, function(err, newMeal) {
        res.redirect('/meals');
    });
}

function getAllMeals(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        })
    })
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}