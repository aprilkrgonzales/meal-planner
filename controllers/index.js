// //const Grocery = require('../models/grocery');
// const Meal = require('../models/meal');

// module.exports = {
//     showAllMeals
// }

// function showAllMeals(req, res) {
//    // console.log(req.body, '<<**<< console log');
//    // console.log(Meal, '<><><> console.log');
//     Meal.find({}, function(err, allMealsFromDb) {
//         console.log(allMealsFromDb, '<<--console log');
//         res.render('index', {
//             allMealsReferenceForEJS: allMealsFromDb
//         });
//     })    
// }