
let queryString;
let myP = document.querySelector("p");
document.body.onload = function(){
    url = location.search;
    console.log(url);
    let text = url.slice(1);
    let arr = text.split("&");
    console.log(arr);
    
    if (arr[0] != "") {
        myP.innerHTML = `thanks : ${arr[0].substring(arr[0].indexOf('=') + 1)}`;
    } else {
        myP.innerHTML = "You didn't enter any data";
    }
}

