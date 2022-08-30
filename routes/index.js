const express = require('express');
const { home, characters } = require('../controllers/main.controller');
const router = express.Router();

router.get('/', home);
router.get('/characters', characters);

module.exports = router;