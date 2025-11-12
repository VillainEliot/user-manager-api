// routes/users.js
const express = require('express');
const router = express.Router();
const { getAllUsers, addUser, deleteUser } = require('../models/users');

router.get('/', (req, res) => {
    res.json(getAllUsers());
});

router.post('/', (req, res) => {
    const { name, email, role } = req.body;

    if (!name || !email || !role) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
    }

    const newUser = addUser(name, email, role);
    res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const deletedId = deleteUser(userId);
    res.json({ message: 'Utilisateur supprimé avec succès', id: deletedId });
});

module.exports = router;
