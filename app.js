const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// Dotenv require
require("dotenv").config();

// Express App
const app = express();

// Connect to MongoDb
const dbURI = process.env.MONGO_DB_CONNECTION;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", false);

// Register view engine
app.set("view engine", "ejs");

// middleware & static files

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  const paragraphs = [
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
    {
      title: "",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit officia minus quibusdam nobis excepturi maiores neque molestiae autem corrupti. Cumque dicta, sapiente molestiae repudiandae mollitia libero at dignissimos inventore necessitatibus obcaecati velit quo neque similique eos magnam culpa doloremque numquam voluptas aut? Reiciendis expedita corporis labore nulla tempora. Recusandae tempora ",
    },
  ];
  res.render("about", { title: "About", paragraphs });
});

// blogs routes
app.use("/blogs", blogRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
