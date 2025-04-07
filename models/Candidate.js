// server/models/Candidate.js
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  position_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Position', required: true },
  election_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Election', required: true },
  manifesto: { type: String },
  profile_picture: { type: String },
});

module.exports = mongoose.model('Candidate', candidateSchema);