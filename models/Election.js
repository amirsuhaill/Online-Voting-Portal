// server/models/Election.js
const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['upcoming', 'ongoing', 'completed'], required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  is_result_public: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Election', electionSchema);