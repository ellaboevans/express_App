const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.status().sendFile("./pages/about.html", { root: __dirname });
});

app.get("/portfolio", (req, res) => {
  res.status(200).sendFile("./pages/portfolio.html", { root: __dirname });
});

// Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});

app.listen(3000, "localhost", () => {
  console.log("Server successfully running on port 3000");
});
