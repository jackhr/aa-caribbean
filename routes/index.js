var express = require('express');
var router = express.Router();
const Island = require('../models/island');

/* GET home page. */
router.get('/', async function (req, res) {
  let islands = await Island.find({});
  islands = islands.sort((a, b) => {
    const titleA = a.name.toUpperCase();
    const titleB = b.name.toUpperCase();
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  });
  res.render('index', {
    title: "AACaribbean",
    islands,
    island: {} // Defaults the HTML title to be "AACaribbean"
  });
});

module.exports = router;
