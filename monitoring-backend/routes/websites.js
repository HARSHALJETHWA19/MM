const express = require('express');
const Website = require('../models/Website');
const User = require('../models/User');

const router = express.Router();

// Example route for creating a website
router.post('/', async (req, res) => {
  const { url, status, responseTime, lastChecked, userId } = req.body;
  try {
    const website = await Website.create({ url, status, responseTime, lastChecked, UserId: userId });
    res.status(201).json(website);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
