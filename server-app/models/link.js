const Sequelize = require("sequelize").Sequelize;
const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const Link = sequelize.define("link", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  baseUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clicks: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  campaignName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  medium: {
    type: DataTypes.STRING,
    allowNull: true
  },
  source: {
    type: DataTypes.STRING,
    allowNull: true
  },
  term: {
    type: DataTypes.STRING,
    allowNull: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Link;
