const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    content: String,
    done: false,
}, {
    timestamps: true
})

const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    groceries: [listSchema],
}, { 
    timestamps: true 
})

module.exports = mongoose.model('Meal', mealSchema);