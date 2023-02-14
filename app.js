const express = require("express");
const morgan = require("morgan");
// console.log(morgan);

// Express App
const app = express();

// Register view engine
app.set("view engine", "ejs");

app.listen(3000, "localhost", () => {
  console.log("Server successfully running on port 3000");
});
// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Evans Elabo",
      snippet:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt itaque hic dolores sequi enim officiis facere, adipisci necessitatibus totam magnam debitis magni fugiat a facilis nobis! Tempora, sequi consequatur. Est sint expedita aperiam cum alias fuga eligendi omnis, quia repellendus saepe eaque voluptate reprehenderit sapiente facilis rem nam error deleniti suscipit id quos modi odit laborum voluptates delectus? Minima veritatis eius nulla sint voluptatibus corrupti quos qui, expedita, delectus iure saepe commodi sunt? Dolorum ducimus consequatur doloremque architecto itaque, facilis corrupti consectetur! Pariatur consequatur et delectus assumenda sit. Aspernatur doloremque non quaerat blanditiis perferendis ipsum quae ut molestias ad eos!",
    },
    {
      title: "Concept Creator",
      snippet:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt itaque hic dolores sequi enim officiis facere, adipisci necessitatibus totam magnam debitis magni fugiat a facilis nobis! Tempora, sequi consequatur. Est sint expedita aperiam cum alias fuga eligendi omnis, quia repellendus saepe eaque voluptate reprehenderit sapiente facilis rem nam error deleniti suscipit id quos modi odit laborum voluptates delectus? Minima veritatis eius nulla sint voluptatibus corrupti quos qui, expedita, delectus iure saepe commodi sunt? Dolorum ducimus consequatur doloremque architecto itaque, facilis corrupti consectetur! Pariatur consequatur et delectus assumenda sit. Aspernatur doloremque non quaerat blanditiis perferendis ipsum quae ut molestias ad eos!   ",
    },
    {
      title: "Code Concept",
      snippet:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt itaque hic dolores sequi enim officiis facere, adipisci necessitatibus totam magnam debitis magni fugiat a facilis nobis! Tempora, sequi consequatur. Est sint expedita aperiam cum alias fuga eligendi omnis, quia repellendus saepe eaque voluptate reprehenderit sapiente facilis rem nam error deleniti suscipit id quos modi odit laborum voluptates delectus? Minima veritatis eius nulla sint voluptatibus corrupti quos qui, expedita, delectus iure saepe commodi sunt? Dolorum ducimus consequatur doloremque architecto itaque, facilis corrupti consectetur! Pariatur consequatur et delectus assumenda sit. Aspernatur doloremque non quaerat blanditiis perferendis ipsum quae ut molestias ad eos!",
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
