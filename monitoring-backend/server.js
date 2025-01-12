// monitoring-backend/server.js
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Add this line

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
