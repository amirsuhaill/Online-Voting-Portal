// server/routes/electionRoutes.js
const express = require('express');
const Election = require('../models/Election'); // Ensure this path is correct
const auth = require('../middleware/auth');
const router = express.Router();

// Create a new election (Admin only)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');

  const { title, description, status, start_time, end_time, is_result_public } = req.body;
  const election = new Election({
    title,
    description,
    status,
    start_time,
    end_time,
    created_by: req.user.userId,
    is_result_public,
  });
  await election.save();
  res.status(201).send(election);
});

// Get all elections
router.get('/', async (req, res) => {
  const elections = await Election.find();
  res.send(elections);
});

module.exports = router;