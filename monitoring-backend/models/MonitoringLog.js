const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MonitoringLog = sequelize.define('MonitoringLog', {
  status: {
    type: DataTypes.STRING,
  },
  response_time: {
    type: DataTypes.INTEGER,
  },
});

MonitoringLog.belongsTo(Website);

module.exports = MonitoringLog;
