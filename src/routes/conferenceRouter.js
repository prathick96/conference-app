const express = require("express");
const User = require("../model/conference");
const sequelize = require("sequelize");

const conferenceRouter = express.Router();

const getUserId = async (contact) => {
  const result = await User.findByPk(contact);
  return JSON.parse(JSON.stringify(result));
};

const getAllProfession = async () => {
  var dataArray = [];
  const result = await User.findAll({
    group: ["profession"],
    attributes: ["profession", [sequelize.fn("COUNT", "profession"), "count"]]
  });
  var data = JSON.parse(JSON.stringify(result));
  data.forEach((element) => {
    if (element.profession === "IT") {
      dataArray[0] = parseInt(element.count);
    }
    if (element.profession === "Management") {
      dataArray[1] = parseInt(element.count);
    }
    if (element.profession === "Student") {
      dataArray[2] = parseInt(element.count);
    }
    if (element.profession === "ContentWriter") {
      dataArray[3] = parseInt(element.count);
    }
  });
  return dataArray.join(",");
};

const getAllGender = async () => {
  var dataArray = [];
  const result = await User.findAll({
    group: ["gender"],
    attributes: ["gender", [sequelize.fn("COUNT", "gender"), "count"]]
  });
  var data = JSON.parse(JSON.stringify(result));
  data.forEach((element) => {
    if (element.gender === "Female") {
      dataArray[0] = parseInt(element.count);
    }
    if (element.gender === "Male") {
      dataArray[1] = parseInt(element.count);
    }
  });
  return dataArray.join(",");
};

const getAllExp = async () => {
  var dataArray = [0, 0, 0];
  const result = await User.findAll({
    group: ["experience"],
    attributes: ["experience", [sequelize.fn("COUNT", "experience"), "count"]]
  });
  var data = JSON.parse(JSON.stringify(result));
  data.forEach((element) => {
    if (element.experience < 3) {
      dataArray[0] = dataArray[0] + parseInt(element.count);
    }
    if (element.experience >= 3 && element.experience <= 6) {
      dataArray[1] = dataArray[1] + parseInt(element.count);
    }
    if (element.experience > 6) {
      dataArray[2] = dataArray[2] + parseInt(element.count);
    }
  });
  return dataArray.join(",");
};

conferenceRouter.post("/register", async (req, res) => {
  try {
    if (req.body.firstName) {
      const userContact = await getUserId(req.body.contact);
      if (userContact) {
        res.status(400).send("Contact number already exists");
      } else {
        const result = await User.create(req.body);
        res.status(200).json({
          message: "User added Successfully",
          data: result.get()
        });
      }
    } else {
      res.status(400).send("Invalid User");
    }
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = {
  conferenceRouter,
  getAllProfession,
  getAllGender,
  getAllExp,
  getUserId
};
