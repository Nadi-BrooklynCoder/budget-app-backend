const express = require('express');
const groceries = express.Router();
const groceryArray = require('../models/grocery');

const groceryObj = groceryArray.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
}, {});

groceries.get('/', (req, res) => {
    res.json(Object.values(groceryObj));
});

groceries.get('/:id', (req, res) => {
    const { id } = req.params;

    if(groceryObj[id]) {
        res.status(200).json(groceryObj[id]);
    } else {
        res.status(404).json({ error: "Not Found" });
    };
});

groceries.post('/', (req, res) => {
    const newGroceryItem = req.body;
    groceryObj[newGroceryItem.id] = newGroceryItem
    res.json({id: newGroceryItem.id, ...groceryObj[newGroceryItem.id]});
});

groceries.delete('/:id', (req, res) => {
    const { id } = req.params;

    if(groceryObj[id]) {
        const deletedGroceryItem = groceryObj[id];
        delete groceryObj[id];
        res.json(deletedGroceryItem);
    } else {
        res.json({ error: "Grocery Item not found" });
    };
});

groceries.put('/:id', (req, res) => {
    const { id } = req.params;

    groceryObj[id] = req.body;
    res.status(200).json(groceryObj[id]);
});

module.exports = groceries;