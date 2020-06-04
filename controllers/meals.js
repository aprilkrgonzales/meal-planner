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
   // console.log(meal, '<-------------THIS IS THE CONSOLE LOG');
    //console.log(req.params.itemId, '<-------------THIS IS THE CONSOLE LOG');
    //console.log(req.body.params, '<----***********---------THIS IS THE CONSOLE LOG');
    
    
    
    Meal.findOne({'groceries._id': req.params.id}, function(err, meal) {
        
        const grocery = meal.groceries.id(req.params.id);
        grocery.remove();
        meal.save(function(err) {
            res.redirect('/meals');
        });
        console.log(req.params.itemId, '<----~~~~~~~~~---------THIS IS THE CONSOLE LOG');
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
        res.send("this is hitting the show new meal controller");
        res.render('/meals/show');
    })
}

function createNewMeal(req, res) {
    req.body.groceries = req.body.groceries.split(',').map(function(item) {
        return {content: item.trim()};
    });
    Meal.create(req.body, function(err, newMeal) {
        res.redirect('/meals');
    })
}

function getAllMeals(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        //res.send("this is hitting the get all meals controller");
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        })
    })
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}