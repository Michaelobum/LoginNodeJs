const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.get('/welcomes', customerController.welcomes);

module.exports = router;