const express = require('express');
const router = express.Router();
const { defaultRoute } = require('../controllers/defaultController');

// Rute default
router.get('/', defaultRoute);

module.exports = router;
