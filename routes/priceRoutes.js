// routes/priceRoutes.js

const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');

router.get('/prices', priceController.getPrices);
router.get('/compare', priceController.comparePrices);

module.exports = router;
