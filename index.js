const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let data = []; // In-memory data

app.get('/', (req, res) => {
    res.send('API is running');
});

app.post('/add', (req, res) => {
    const item = req.body.item;
    if (!item) return res.status(400).json({ error: 'No item provided' });

    data.push(item);
    res.json({ message: 'Item added', data });
});

app.post('/remove', (req, res) => {
    const item = req.body.item;
    const index = data.indexOf(item);
    if (index === -1) return res.status(404).json({ error: 'Item not found' });

    data.splice(index, 1);
    res.json({ message: 'Item removed', data });
});

app.get('/list', (req, res) => {
    res.json({ data });
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
