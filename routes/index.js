const express = require('express');
const { home, characters, locations, episodes, charByID, addToFavorites, locByID, epiByID } = require('../controllers/main.controller');
const router = express.Router();

router.get('/', home);
router.get('/characters', characters);
router.get('/locations', locations);
router.get('/episodes', episodes);
router.get('/characters/:id', charByID);
router.post('/addToFaves', addToFavorites);
router.get('/locations/:id',locByID);
router.get('/episodes/:id', epiByID);

module.exports = router;