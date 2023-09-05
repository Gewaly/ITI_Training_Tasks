var draggedImg;

function drag(img){
    draggedImg = img;
}

function drop(div){
    div.appendChild(draggedImg);
}

let myDiv = document.querySelector("div");
let imgs = document.querySelectorAll("img");

myDiv.ondragover = function(event){
    event.preventDefault();
}

myDiv.ondrop = function(){
    let imgHeight = draggedImg.clientHeight;
    let imgWidth = draggedImg.clientWidth;
    const childElements = Array.from(myDiv.children);
    for (let i = 0; i < childElements.length; i++){
        document.body.appendChild(childElements[i]);
    }
    console.log(draggedImg.clientHeight);
    myDiv.style.height = `${imgHeight}px`; 
    myDiv.style.width = `${imgWidth}px`; 
    drop(this);
}

for(let i = 0; i < imgs.length; i++){
    imgs[i].ondragstart = function(){
        drag(this);
    }
}