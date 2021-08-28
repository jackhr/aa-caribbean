const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const islandSchema = new Schema({
  aaGroups: [{type: Schema.Types.ObjectId, ref: 'AAGroup'}],
  address: String,
  email: String,
  tel: String,
  info: String,
  name: String,
  website: String,
  flagKey: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Island', islandSchema);