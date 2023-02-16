const year = document.querySelector("#year");
let date = new Date();
year.textContent = date.getFullYear();

// Delete Blog
const trashcan = document.querySelector("a.delete");

trashcan.addEventListener("click", (e) => {
  const endpoints = `/blogs/${trashcan.dataset.doc}`;

  fetch(endpoints, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => (window.location.href = data.redirect))
    .catch((err) => {
      console.log(err);
    });
});
