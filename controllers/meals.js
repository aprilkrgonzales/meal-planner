const Meal = require('../models/meal');

module.exports = {
    getNewMealForm,
    getAllMeals,
    createNewMeal,
    //showNewMeal,
    deleteOneMeal,
    deleteOneItem
}

function deleteOneItem(req, res) {    
    Meal.findOne({'_id': req.params.mealId}, function(err, meal) {        
        const item = meal.groceries.id(req.params.itemId);
        item.done = true;
        meal.save(function (err) {
            //console.log(meal, '<<<<<<MEAL');
            res.redirect('/meals');
        });
    });
}

function deleteOneMeal(req, res) {
    Meal.find(req.params.id, function(err) {
        res.send('this is a resource');
    })
//     Meal.findByIdAndRemove(req.params.id, function(err, meal) {
//        console.log(req.params.id, '<<<< req params id <<<<');
//        console.log(meal, 'console log meal <<<<<<');
//         res.send('this is a resource');
//         res.redirect('/');
//    });
}

// function showNewMeal(req, res) {
//     Meal.find({}, function(err, allMealsFromDb) {
//         res.render('/meals/show');
//     })
// }

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
        allMealsFromDb = allMealsFromDb.map(function (meal){
            meal.groceries = meal.groceries.filter(function (item) {
                return item.done === false;
            });
            return meal;
        });
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        });
    });
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}