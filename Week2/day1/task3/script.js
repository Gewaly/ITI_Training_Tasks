const allInputs = document.querySelectorAll("input");
const allBtns = document.querySelectorAll("button");
const allPs = document.querySelectorAll("p");
allBtns[0].onclick = function(){
    let name = true, age = true;
    if(allInputs[0].value == ""){
        alert("enter name first");
        name = false;
    }
    if(allInputs[1].value == ""){
        if(name === true){
            alert("enter age first");
        }
        age = false;
    }
    if(name === true && age === true){
        localStorage.setItem("name", allInputs[0].value);
        localStorage.setItem("age", allInputs[1].value);
        alert("Data saved successfully");
    }
    
}

allBtns[1].onclick = function(){
    
    allInputs[0].value = localStorage.getItem("name");
    allInputs[1].value = localStorage.getItem("age");
    
}

allBtns[2].onclick = function(){
    
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    alert("data removed successfully");
}
let counter = 0;
allBtns[3].onclick = function(){
    counter++;
    clickCounter();
    allPs[1].innerText = `counter: ${counter}`
}

if(sessionStorage.clickcount){
    allPs[0].innerText = `Session Storage counter: ${sessionStorage.clickcount}`
}

function clickCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } 
    else {
      sessionStorage.clickcount = 1;
    }
    allPs[0].innerText = `Session Storage counter: ${sessionStorage.clickcount}`
}