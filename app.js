const express = require('express');
const groceryController = require('./controllers/groceryController');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/groceries', groceryController);

app.get('/', (req, res) => {
    res.send('Welcome to your Grocery List.');
});

module.exports = app;