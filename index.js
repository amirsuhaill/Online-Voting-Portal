// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const electionRoutes = require('./routes/electionRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3300;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/auth', authRoutes);
app.use('/api/elections', electionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});