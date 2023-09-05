function display() {
  document.getElementById("hey").style = "display :none";
}
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.getElementById("username").addEventListener("input", function () {
  var usernameInput = this;
  var lengthAlert = document.getElementById("lengthAlert");
  if (usernameInput.value.length < 5) {
    lengthAlert.classList.remove("d-none");
  } else {
    lengthAlert.classList.add("d-none");
  }
});
