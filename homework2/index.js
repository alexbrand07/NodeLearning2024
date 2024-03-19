const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())


let items = [];

// Create
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read
app.get('/items', (req, res) => {
    res.json(items);
});

// Update
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    items = items.map(item => {
        if (item.id === itemId) {
            return { ...item, ...updatedItem };
        }
        return item;
    });
    res.json(updatedItem);
});

// Delete
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    items = items.filter(item => item.id !== itemId);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
