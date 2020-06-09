const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/meals');

router.get('/', mealsController.getAllMeals);
router.get('/new', isLoggedIn, mealsController.getNewMealForm);
//router.get('/:id', isLoggedIn, mealsController.showNewMeal);
router.post('/', isLoggedIn, mealsController.createNewMeal);
// router.delete('/:mealId', isLoggedIn, mealsController.deleteOneMeal);
router.put('/:mealId/items/:itemId', isLoggedIn, mealsController.deleteOneItem);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;


