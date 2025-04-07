// server/models/Position.js
const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  election_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Election', required: true },
});

module.exports = mongoose.model('Position', positionSchema);