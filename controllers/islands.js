const AAGroup = require('../models/aaGroup.js');
const Island = require('../models/island.js');

module.exports = {
  show,
}

async function show(req, res) {
  let islands = await Island.find({});
  islands = islands.sort((a, b) => {
    const titleA = a.name.toUpperCase();
    const titleB = b.name.toUpperCase();
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  });
  const island = await Island.findById(req.params.id)
    .populate('aaGroups')
    .exec();
  res.render('islands/show', {
    island,
    islands
  });
}
