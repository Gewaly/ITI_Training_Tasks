const allBtns = document.querySelectorAll("button");

const myP = document.querySelector("p");
var test;
allBtns[0].onclick = function(){
    myP.innerHTML = ("");
    myP.style.border = 'none';
    test = setTimeout(function(){
        alert("hello from alert");
        
    }, 2000);
    
}

allBtns[1].onclick = function(){
    clearTimeout(test);
    myP.innerHTML = ("Alert Canceled");
    myP.style.border = '1px solid red';
}