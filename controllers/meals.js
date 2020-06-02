const Meal = require('../models/meal');

module.exports = {
    getNewMealForm,
    getAllMeals,
    createNewMeal,
    showNewMeal,
    deleteOneMeal,
    updateMeal
}

function updateMeal(req, res) {
    req.body.done = !!req.body.done;
    Meal.update(req.params.id, req.body);
    res.redirect(`/meals/${req.params.id}`);
}

// function deleteOneAuthor(req, res) {
//     Author.findByIdAndRemove(req.params.authorIdToDelete, function(err, deleteAuthorConfirmation) {
//         Book.deleteMany({author: req.params.authorIdToDelete}, function(err) {
//             res.redirect('/authors');
//         })
//     })
// }

function deleteOneMeal(req, res) {
    //res.send("this is hitting the meals controller");
    //console.log(req.params.id, 'REQ PARAMS IDDDDDDDDD');
   // Meal.deleteOne(req.params.id);
   //console.log(Meal._id, "meals dot underscore id"); //output: undefined
   //console.log(req.body, "reqqqqqq dot bodyyyyyyyyyy"); // output: {}
   //console.log(req.params.id, "reqqqqqq params id"); // output: 5ed2ac.....
   ////const idx = meals.findIndex(meal => meal._id === parseInt(id));
   //const idx = req.params.id;
   //meals.splice(idx, 1);

   Meal.findByIdAndRemove(req.params.id, function(err) {
       res.redirect('/meals');
   })
}

function showNewMeal(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        res.render('/meals/show');
    })
}

function createNewMeal(req, res) {
    Meal.create(req.body, function(err, newMeal) {
        //console.log(req.body.name,'<--------Meal');
        res.redirect('/meals');
    })
}

function getAllMeals(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        //console.log(Meal.typeof, '<-------- type of meal');
        //console.log(Array.from(Meal), '<--------meal array');
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        })
    })
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}