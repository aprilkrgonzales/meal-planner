const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
    content: String,
    done: {
        type: Boolean, 
        default: false
    } ,
}, {
    timestamps: true
})

const mealSchema = new Schema({
    mealType: {
        type: String,
        required: true
    },
    groceries: [listItemSchema],
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }     
}, { 
    timestamps: true 
})

module.exports = mongoose.model('Meal', mealSchema);
