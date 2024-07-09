const { v4: uuidv4 } = require('uuid');

module.exports = [
    {
        id: uuidv4(),
        item_name: "Milk",
        amount: 2.99,
        date: "2024-07-01",
        from: "Grocery Store",
        category: "Food" 
    },
    {
        id: uuidv4(),
        item_name: "Bread",
        amount: 1.99,
        date: "2024-07-01",
        from: "Grocery Store",
        category: "Food"
      },
      {
        id: uuidv4(),
        item_name: "Eggs",
        amount: 3.99,
        date: "2024-07-01",
        from: "Grocery Store",
        category: "Food"
      },
      {
        id: uuidv4(),
        item_name: "Cheese",
        amount: 4.99,
        date: "2024-07-01",
        from: "Grocery Store",
        category: "Food"
      },
      {
        id: uuidv4(),
        item_name: "Apples",
        amount: 3.49,
        date: "2024-07-01",
        from: "Grocery Store",
        category: "Food"
      }
    ];
