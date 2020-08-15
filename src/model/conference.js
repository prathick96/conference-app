const { DataTypes } = require("sequelize");
const confDb = require("../config/dbconfig");

const Conference = confDb.define("user-data", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name"
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Male", "Female"],
    allowNull: false
  },
  profession: {
    type: DataTypes.ENUM,
    values: ["IT", "Management", "Student", "ContentWriter"],
    allowNull: false
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contact: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  }
});

module.exports = Conference;
