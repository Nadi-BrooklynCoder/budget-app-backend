const express = require('express');
const groceries = express.Router();
const groceryArray = require('../models/grocery');

groceries.get('/', (req, res) => {
    res.json(groceryArray);
});

groceries.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;

    if(groceryArray[arrayIndex]) {
        res.status(200).json(groceryArray[arrayIndex]);
    } else {
        res.status(404).json({ error: "Not Found" });
    };
});

groceries.post('/', (req, res) => {
    groceryArray.push(req.body);
    res.json(groceryArray[groceryArray.length - 1]);
});

groceries.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;

    if(groceryArray[arrayIndex]) {
        const deletedGroceryItem = groceryArray.splice(arrayIndex, 1);
        res.json(deletedGroceryItem[0]);
    } else {
        res.json({ error: "Grocery Item not found" });
    };
});

groceries.put('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;

    groceryArray[arrayIndex] = req.body;
    res.status(200).json(groceryArray[arrayIndex]);
});

module.exports = groceries;