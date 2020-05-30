const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/meals');

router.get('/', mealsController.getAllMeals);
router.get('/new', mealsController.getNewMealForm);
router.get('/:id', mealsController.showNewMeal);

router.post('/', mealsController.createNewMeal);


module.exports = router;