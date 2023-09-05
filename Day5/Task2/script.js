setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
function aler() {
  alert("I am an alert box!");
}
function con() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}
function prom() {
  let text;
  let person = prompt("Please enter your name:", "Mohamed Gewaly");
}
