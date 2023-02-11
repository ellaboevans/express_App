const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.get("/portfolio", (req, res) => {
  res.sendFile("./pages/portfolio.html", { root: __dirname });
});

app.listen(3000, "localhost", () => {
  console.log("Server successfully running on port 3000");
});
