// const List = require('../models/meal');

// module.exports = {
//     deleteOneMeal,
// };

// // function deleteOneMeal(req, res) {
// //     res.send("hitting the delete route in groceries ctrlr");
// //     List.deleteOne(req.params.id);
// //     res.redirect('/meals');
// // };

// function deleteOneMeal(req, res) {
//     res.send("this is hitting the delete function in ctrls groc");
//     const idx = meals.findIndex(meal => meal.id === parseInt(id));
//     meals.splice(idx, 1);
//     res.redirect('/meals');
// };















// const Skill = require('../models/skill');

// module.exports = {
//     index,
//     show,
//     new: newSkill,
//     create,
//     delete: deleteSkill,
//     edit,
//     update,
// };

// function update(req, res) {
//     req.body.done = !!req.body.done;
//     Skill.update(req.params.id, req.body);
//     res.redirect(`/skills/${req.params.id}`);
// };

// function edit(req, res) {
//     const skill = Skill.getOne(req.params.id);
//     res.render('skills/edit', {skill});
// };

// function deleteSkill(req, res) {
//     Skill.deleteOne(req.params.id);
//     res.redirect('/skills');
// };

// function create(req, res) {
//     Skill.create(req.body);
//     res.redirect('/skills');
//     console.log('create skill functionality');
// };

// function newSkill(req, res) {
//     res.render('skills/new.ejs');
// };

// function index(req, res) {
//     res.render('skills/index', {
//         skills: Skill.getAll(),
//         time: req.time,
//     });
// };

// function show(req, res) {
//     res.render('skills/show', {
//         skill: Skill.getOne(req.params.id),
//         skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
//     })
// };
