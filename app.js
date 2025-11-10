const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users');

const app = express();

const cors = require('cors');

// Autoriser uniquement les requêtes depuis angular local
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

module.exports = app;
