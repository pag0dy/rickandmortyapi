require('dotenv').config();

const express = require('express');
const path = require('path');
const router = require('./routes');
const session = require('express-session');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret: "randomsecretsupersecret",
    saveUninitialized: true,
    cokkie: { maxAge: oneDay},
    resave: false
}));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`)
});