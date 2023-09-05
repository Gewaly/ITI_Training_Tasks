const allBtns = document.querySelectorAll("button");

const allRadios = document.querySelectorAll("input");

var win;

allBtns[0].onclick = function(){
    win = window.open('','_Blank', "width = 200, height = 200,screenX = 333, screenY = 111");
    win.document.write("This is new window");
    if(allRadios[0].checked){
        win.document.bgColor = 'lightgreen';
        win.focus();
    }

    if(allRadios[1].checked){
        win.document.bgColor = 'red';
        win.focus();

    }
    if(allRadios[2].checked){
        win.document.bgColor = 'pink';
        win.focus();

    }
}

allBtns[1].onclick = function(){
    win.close();
}

allBtns[2].onclick = function(){
    alert(win.closed);
}

allRadios[0].onclick = function(){
    win.document.bgColor = 'lightgreen';
    win.focus();
    
}


allRadios[1].onclick = function(){
    win.document.bgColor = 'red';
    win.focus();
    
}
allRadios[2].onclick = function(){
    win.document.bgColor = 'pink';
    win.focus();
    
}