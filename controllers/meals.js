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

//update function - PUT //-------------------------
//find meal id
//get array of ingedients
//index of id of ingredient  //look up syntax
//splice
//save the changes to the meal

////find grocery list item id
////find by id and remove

//MAYBE find just the id of the ingredient and remove that - will this update the meal

function deleteOneItem(req, res) {    
    console.log(req.params.mealId);
    //// find the meal id = Meal(req.body._id)
    //const eachItem = Meal.find({req.params.mealId});
    Meal.findById(req.params.mealId, function(err, meal) {
        console.log(meal);
    })
        //res.send("this is a resource");
        //// find the grocery id = 
    //console.log("THIS IS THE CONSOLE LOG1 ------->", eachItem,"<------------------------");
    //console.log("THIS IS THE CONSOLE LOG2 ------->", eachItem._id,"<------------------------");
        //remove grocery that matches the id
            //req.body.groceries.splice(eachItem._id, 1);

    

        




    //render the meals page

    //})


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