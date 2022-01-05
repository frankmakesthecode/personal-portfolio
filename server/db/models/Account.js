const Sequelize = require('sequelize');
const db = require('../db');

const Account = db.define('account', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  link: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false,
  },
});

module.exports = Account;
