const express = require("express");

// Express App
const app = express();

// Register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    { title: "Evans Elabo", snippet: "Lorem ipsum dolor sit amet consectetur" },
    {
      title: "Concept Creator",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Code Concept",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
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

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(3000, "localhost", () => {
  console.log("Server successfully running on port 3000");
});
