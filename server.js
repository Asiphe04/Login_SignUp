const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
// const connection = require("./db");
try {
  const connection = require("./db");
} catch (error) {
  console.error("Error importing db.js:", error);
}

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
app.post("/signUp", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    connection.query("INSERT INTO users SET ?", user, (error, results) => {
      if (error) {
        console.error("Error inserting user into database:", error);
        return res.redirect("/signUp"); 
      }

      console.log("User inserted into database");
      console.log(users);
      res.redirect("/login");
    });
  } catch {
    res.redirect("/signUp");
  }


});


app.listen(1111);
