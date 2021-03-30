const Expense = require('../../models/Expense');
const express = require('express');
const router = express.Router();

// @route  GET /api/expenses
// @desc   Gets all expenses
// @access public
router.get('/', (req, res, next) => {
    Expense
        .find()
        .sort({ updatedAt: -1 })
        .then(items => {
            res.json(items);
        })
});

// @route  POST /api/expenses
// @desc   Gets all expenses
// @access public
router.post('/', (req, res) => {
    const expense = Expense({
        name: req.body.name,
        amount: req.body.amount
    });

    expense.save();
    res.send(expense);
});

module.exports = router;