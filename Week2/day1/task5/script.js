let myP = document.querySelector("p");
let myButton = document.querySelector("button");
myButton.onclick = function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      myP.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    myP.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
