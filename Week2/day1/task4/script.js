
const allDivs = document.querySelectorAll(".container div");

allDivs.forEach((el) => {
    el.onclick = function(){
        if(el.getAttribute("data-isClicked") == "0"){
            alert("messi has been touched");
            el.setAttribute("data-isClicked","1");
        }
        else{
            alert("u already touched him once");
        }
    }
    
});