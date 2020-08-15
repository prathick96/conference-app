const { Sequelize } = require("sequelize");

const conferenceDB = new Sequelize(process.env.DB_URL);

(async () => {
  try {
    await conferenceDB.authenticate();
    console.log("connection Established!");
  } catch (err) {
    console.log("unable to connect to DB");
  }
})();

module.exports = conferenceDB;
