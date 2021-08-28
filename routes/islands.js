const express = require('express');
const router = express.Router();
const islandsCtrl = require("../controllers/islands.js");

// GET "/islands/:id"
router.get('/:id', islandsCtrl.show);

module.exports = router;
