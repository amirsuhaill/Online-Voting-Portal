// server/models/Vote.js
const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  election_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Election', required: true },
  position_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Position', required: true },
  candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  voter_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vote', voteSchema);