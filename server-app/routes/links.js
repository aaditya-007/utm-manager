const express = require('express');
const linksController = require('../contollers/links');

const router = express.Router();

router.post('/create', linksController.storeLinks);
router.get('/create', linksController.storeLinksPage);
router.get('/', linksController.getAllLinks);

module.exports = router;