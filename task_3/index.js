const express = require('express');
const databaseService = require('./services/databaseService.js')


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())


let items = [];

// Create
app.post('/items', (req, res) => {
    const newItem = req.body;
    databaseService = createItem(name, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result)
    })
});

// Read
app.get('/items', (req, res) => {
    databaseService.getItem((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result);
    })
});

// Update
app.put('/items/:id', (req, res) => {
    const id = req.params
    const name = req.body;
    databaseService.updateItem(id, name, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result);
    });
});

// Delete
app.delete('/items/:id', (req, res) => {
    const id = req.params;
    databaseService.deleteItem(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
