const Expense = require('../../models/Expense');
const express = require('express');
const router = express.Router();

// @route  GET /api/expenses/:userName
// @desc   Gets all expenses
// @access public
router.get('/:user', (req, res, next) => {
    console.log('looking for expenses for:', req.params.user);
    Expense
        .find({ user: req.params.user })
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
        user: req.body.user,
        name: req.body.name,
        amount: req.body.amount
    });

    expense.save();
    res.send(expense);
});

// @route  DELETE /api/expenses/:id
// @desc   Deletes an expense by id
// @access public
router.delete('/:id', (req, res) => {
    Expense
        .findByIdAndDelete(req.params.id, (err, expense) => {
            if (err) {
                console.log(err);
                res.status(404).json({ success: true });
            } else {
                console.log('deleted:', expense);
                res.json({ success: true });
            }
        })
        .then(() => {
            console.log('item found');
        })
        .catch(() => {
            console.log('no item with that id');
        })
})

module.exports = router;