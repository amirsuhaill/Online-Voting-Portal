// server/routes/voteRoutes.js
const express = require('express');
const Vote = require('../models/Vote');
const auth = require('../middleware/auth');
const router = express.Router();

// Cast a vote
router.post('/', auth, async (req, res) => {
  const { election_id, position_id, candidate_id } = req.body;
  const vote = new Vote({ election_id, position_id, candidate_id, voter_id: req.user.userId });
  await vote.save();
  res.status(201).send('Vote cast');
});

// Get votes for an election (Admin only)
router.get('/:electionId', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');

  const votes = await Vote.find({ election_id: req.params.electionId });
  res.send(votes);
});

module.exports = router;