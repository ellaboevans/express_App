const express = require("express");

const app = express();

app.get("/index.html", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about.html", (req, res) => {
    // console.log(req.url)
  res.sendFile("./pages/about.html", { root: __dirname });
});

app.listen(3000, "localhost", () => {
  console.log("Server running on port 3000");
});
