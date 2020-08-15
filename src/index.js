const express = require("express");
const bodyParser = require("body-parser");
const {
  conferenceRouter,
  getAllProfession,
  getAllGender,
  getAllExp
} = require("./routes/conferenceRouter");
const ifEquality = require("./views/helpers/ifEquality");
const expressHbs = require("express-handlebars");
const path = require("path");

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: {
    ifEquality
  }
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.status(200).render("home", {
    layout: "hero",
    title: "Home"
  });
});

app.get("/chart", async (req, res) => {
  try {
    res.status(200).render("charts.hbs", {
      layout: "navigation",
      title: "Charts",
      professionData: await getAllProfession(),
      genderData: await getAllGender(),
      experienceData: await getAllExp()
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

app.get("/about", (request, response) => {
  response.status(200).render("home.hbs", {
    message: "About this page"
  });
});

app.get("/register", (request, response) => {
  response.status(200).render("register.hbs", {
    layout: "login",
    title: "Register",
    submitTarget: "/api/conference/register",
    submitMethod: "POST",
    formTitle: "User Sign-Up Form"
  });
});

app.use("/api/conference", conferenceRouter);

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found");
});

app.listen(8080, () => {
  console.log("server running");
});
