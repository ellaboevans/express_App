// Copyright Logic
const year = document.querySelector("#year");
// console.log(year);
const getFullYears = () => {
  let date = new Date();
  year.textContent = date.getFullYear();
};

getFullYears();

// Delete Method on Frontend
const trashcan = document.querySelector("a.delete");

const deleteOnFrontend = () => {
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
};
deleteOnFrontend();


alert("Connected to all pages!");
