const express = require('express');
const leadsController = require('../contollers/leads');

const router = express.Router();

router.post('/store', leadsController.storeLeads);
router.get('/all', leadsController.getAllLeads);

module.exports = router;