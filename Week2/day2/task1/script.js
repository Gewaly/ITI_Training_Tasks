const allBtns = document.querySelectorAll("button");
var scroll;

allBtns[0].onclick = function(){
    scroll = setInterval(() =>{
        window.scrollBy(0, 30);
    }, 200);
}

allBtns[1].onclick = function(){
    clearInterval(scroll);
}