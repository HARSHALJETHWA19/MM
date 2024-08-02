const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Ensure User model is imported

const Website = sequelize.define('Website', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responseTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lastChecked: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define associations
Website.belongsTo(User, { foreignKey: 'UserId' }); // Ensure correct association

module.exports = Website;
