const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  day: String,
  openToPublic: Boolean,
  place: String,
  time: String,
}, {
  timestamps: true
});

const aaGroupSchema = new Schema({
  contactEmail: String,
  info: String,
  meetings: [meetingSchema],
  name: String,
  pointsOfContact: [],
}, {
  timestamps: true
});

module.exports = mongoose.model('AAGroup', aaGroupSchema);