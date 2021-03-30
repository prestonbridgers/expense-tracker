const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expensesRouter = require('./routes/api/expenses');

const app = express();
app.use(cors());

const dburi = require('./config/mongoose').dburi;
const port = require('./config/network').port;

mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to MongoDB');
        app.listen(port);
        console.log('Listening on port', port);
    }
});

app.use(express.json());
app.use('/api/expenses', expensesRouter);

app.use('*', (req, res) => {
    res.status(404).send("404: Page Not Found...");
})