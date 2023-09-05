const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
let parent;
let box;
// function to add elements
addButton.addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    parent = document.createElement("div");
    parent.classList.add("parent_div");
    parent.style =
      "display: flex; background-color:black; justify-content: space-around";
    for (let i = 0; i < 3; i++) {
      box = document.createElement("div");
      box.classList.add("box_div");
      parent.appendChild(box);
      box.style =
        "  color: white;  border-radius: 50%; background-color: rgb(44, 49, 44);  width: 25%; height: 400px; margin: 10px; font-size: 30px; ;";
    }
    document.body.appendChild(parent);
  }
});

// function to remove elements
removeButton.addEventListener("click", function () {
  const parents = document.getElementsByClassName("parent_div");
  for (let i = parents.length - 1; i >= 0; i--) {
    parents[i].remove();
  }
});
