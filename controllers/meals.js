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
    // meals groceries array item id
    //pass meal id //serach through groceries
    item._id 
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
        res.send("this is hitting the show new meal controller");
        res.render('/meals/show');
    })
}

function createNewMeal(req, res) {
    req.body.groceries = req.body.groceries.split(',').map(function(item) {
        return {content: item.trim()};
    });
    Meal.create(req.body, function(err, newMeal) {
        //console.log(req.body.name,'<--------Meal');
        res.redirect('/meals');
    })
}

function getAllMeals(req, res) {
    Meal.find({}, function(err, allMealsFromDb) {
        //res.send("this is hitting the get all meals controller");
        console.log(allMealsFromDb, "all meal objects");
       // console.log(allMealsFromDb.typeof, "TYPE OF");
        console.log(req.params.id);
       
        //console.log(meals.modelName, "MODEL NAME");
        
        // for(name in allMealsFromDb) {
        //     console.log(name, '<--------name');
        //     let value = allMealsFromDb[name];
        //     console.log(value, "<----------value");
        //     console.log(allMealsFromDb[name], "<----------db name");
        // }
        res.render('userViews/groceries', {
            allMealsReferenceForEJS: allMealsFromDb
        })
        
        //console.log(allMealsFromDb._id); //output: undefined 
        //console.log(Meal.typeof, '<-------- type of meal');
        //console.log(Array.from(Meal), '<--------meal array');
        //console.log(Meal, "Meal!!!!", Meal.typeof);
        //console.log(JSON.stringify(allMealsFromDb.name), "STRING PLSSSSS");
        //let mealName = allMealsFromDb[name];
        //console.log(mealName);
        //console.log(req.body.id); //output: undefined
        //console.log(allMealsFromDb.id); //output: undefined
        //allMealsFromDb.forEach();
        
    })
}

function getNewMealForm(req, res) {
    res.render('userViews/new');
}