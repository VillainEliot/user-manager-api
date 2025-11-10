const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newUser = { id: users.length + 1, name, email, role };
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
