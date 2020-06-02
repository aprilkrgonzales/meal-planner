const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/meals');

router.get('/', mealsController.getAllMeals);
router.get('/new', mealsController.getNewMealForm);
router.get('/:id', mealsController.showNewMeal);
//router.get('/:id/edit', mealsController.edit);

router.post('/', mealsController.createNewMeal);
router.delete('/:id', mealsController.deleteOneMeal);
//router.put('/:id', mealsController.updateList);


module.exports = router;


