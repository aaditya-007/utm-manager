const express = require('express');
const templateController = require('../contollers/templates');

const router = express.Router();

router.post('/create', templateController.storeTempaltes);
router.get('/', templateController.getAll);

module.exports = router;