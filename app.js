const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// Express App
const app = express();

// Connect to MongoDb
const dbURI =
  "mongodb+srv://codeconcept:Erosion123@node-course.ina7eck.mongodb.net/node-tutorials?retryWrites=true&w=majority";

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
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      conosle.log(err);
    });
});

// app.get("/blogs/:id", (req, res) => {
//   const id = req.params.id;
//   Blog.findById(id)
//     .then((result) => {
//       res.render("details", { blog: result, title: "Blog Details" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
