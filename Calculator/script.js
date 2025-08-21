let display = document.getElementById("display");

function append(value){
    if(display.textContent==="0"){
        display.textContent=value;
    }else{
        display.textContent+=value;
    }
}

function clearDisplay(){
    display.textContent="0";
}

function deleteLast(){
    let text= display.textContent;
    display.textContent= text.length > 1 ? text.slice(0, -1): "0";
}

function calculate(){
    try {
        display.textContent=eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
    }catch{
        display.textContent="Error!";
    }
}