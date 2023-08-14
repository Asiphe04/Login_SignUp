const express = require("express");
const app = express();
const users = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { firstName: "Asiphe" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {});

app.get("/signUp", (req, res) => {
  res.render("signUp.ejs");
});

app.post("/signUp", (req, res) => {
  req.body.name;
});

app.listen(1111);
