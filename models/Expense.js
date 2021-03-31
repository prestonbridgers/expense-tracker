const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = Schema({
    user: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
}, { timestamps: true });

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;

