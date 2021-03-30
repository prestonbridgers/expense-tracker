const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const expensesRouter = require('./routes/api/expenses');

const app = express();
app.use(cors());

const dburi = require('./config/mongoose').dburi;
const port = process.env.PORT || 5000;

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

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use('*', (req, res) => {
    res.status(404).send("404: Page Not Found...");
})