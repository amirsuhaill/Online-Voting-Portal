// server/routes/candidateRoutes.js
const express = require('express');
const Candidate = require('../models/Candidate');
const auth = require('../middleware/auth');
const router = express.Router();

// Add a candidate (Admin only)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');

  const { user_id, position_id, election_id, manifesto, profile_picture } = req.body;
  const candidate = new Candidate({ user_id, position_id, election_id, manifesto, profile_picture });
  await candidate.save();
  res.status(201).send(candidate);
});

// Get all candidates for an election
router.get('/:electionId', async (req, res) => {
  const candidates = await Candidate.find({ election_id: req.params.electionId }).populate('user_id');
  res.send(candidates);
});

module.exports = router;