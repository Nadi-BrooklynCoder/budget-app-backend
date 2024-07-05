const express = require('express');
const groceryController = require('./controllers/groceryController');

const app = express();

app.use(express.json());
app.use('/groceries', groceryController);

app.get('/', (req, res) => {
    res.send('Hello there!')
})

module.exports = app;