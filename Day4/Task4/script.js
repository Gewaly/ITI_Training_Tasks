const addButton = document.getElementById("add-h1");
const removeButton = document.getElementById("remove-child");
const changecolor= document.getElementById("ch-h1");
const parentElement = document.getElementById("con");
let newElement;
addButton.addEventListener("click", function () {
  newElement = document.createElement("h1");
  newElement.textContent = `New h1 Element`;
  parentElement.appendChild(newElement);
});
removeButton.addEventListener("click", function () {
  const h1Elements_remove = document.querySelectorAll("h1");
  h1Elements_remove.forEach(function (ele) {
    ele.remove();
  });
});

changecolor.addEventListener("click", function () {
  const h1Elements_change = document.querySelectorAll("h1");
  h1Elements_change.forEach(function (ele) {
    ele.style.backgroundColor = "blue";
    ele.style.color = "#fff";
  });
});
