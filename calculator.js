var display1 = document.getElementById('display1');
var display2 = document.getElementById('display2');
var temporaryResult = document.getElementById('temporaryResult');
var equal = document.getElementById('equal');
var operationName;
var haveDot = hitEqual = false;


/*var buttonArray = [];
var buttons = document.querySelectorAll('.display');
for(var i = 0; i< buttons.length; i++){
    buttonArray.push(buttons[i]);
}*/

var buttonArray = Array.from(document.querySelectorAll('.display'));

buttonArray.forEach(element =>{
    element.addEventListener('click', function(e){
       if(e.target.innerText === '.' && !haveDot){
         
            haveDot = true;
        }
        else if(e.target.innerText === '.' && haveDot){
           return; 
        } 
        if(hitEqual){
            return;
        }
        else{
            display1.innerHTML +=element.innerHTML;
        }
    })
})

var clear = document.getElementById('clear');
clear.addEventListener('click', clearScreen);
function clearScreen(){
    display1.innerHTML = display2.innerHTML = temporaryResult.innerHTML = "";
    hitEqual = false;
}

var back = document.getElementById('back');
back.addEventListener('click', backSpace);
function backSpace(){
    display1.innerHTML = display1.innerText.slice(0,-1);   
}

var operatorArray = Array.from(document.querySelectorAll('.operator'));

operatorArray.forEach(operator =>{
    operator.addEventListener('click', (e)=>{
        if(display1.innerText ==="" && e.target.id != "square" && e.target.id != "add" 
        && e.target.id != "subtract"){
            return;
        }
        else{
            if (e.target.id === 'square'){
            display2.innerText = e.target.innerText;
            }
            else{
                display2.innerText = display1.innerText + " " + e.target.innerHTML;
            }
            temporaryResult.innerText = display1.innerText;
            display1.innerText = "";
            operationName = e.target.innerText;
            haveDot = hitEqual = false;
        }
    })
})

equal.addEventListener('click', performOperation);
function performOperation(){
    if(display1.innerText===""){
        return;
    }
    else{
        if(!hitEqual){
            display2.innerHTML += " " + display1.innerHTML;
            mathOperation();
            temporaryResult.innerText = "";
            hitEqual = true;
        }
        else{
            return;
        }
    }
}

function mathOperation(){
    switch(operationName){
        case '+':
            display1.innerText = parseFloat(temporaryResult.innerText) + parseFloat(display1.innerText);
            break;
        case '-':
            display1.innerText = parseFloat(temporaryResult.innerText) - parseFloat(display1.innerText);
            break;
        case '*':
            display1.innerText = parseFloat(temporaryResult.innerText) * parseFloat(display1.innerText);
            break;
        case '/':
            if(display1.innerText != 0){
                display1.innerText = parseFloat(temporaryResult.innerText) / parseFloat(display1.innerText);
            }
            else{
                display2.innerText = temporaryResult.innerText = "";
                display1.innerText = "Math Error!";
            }
            break;
        case'\u221A':
            display1.innerText = Math.sqrt(parseFloat(display1.innerText));
            break;
    }
}

/* ans funtion
avoid adding text to display1 when therse is result => instread add to display2 */ 

/*Adding function

When hit + => Get the number on the screen an store in a variable x (number before the +)

When hit = => different function for =, get the string after the + symbol, store it in variable y
Add it with the variable x
let z = result => display z
*/


/*
//Limit screen within div

//Perform arithmetic operation
=> Hit number then do nothing
=> Hit either +, -, *, /: store the number in a variable
=> Hit another number => Do nothing
=> Hit =: Store the second number in a variable and perform arithmetic operation 
=> Then display the result.
=> Already result and then hit another + - * /: continue result

//if the last char of the string is either +, -, *, / => no add

// equal : copy the num if no arithmetic / perform arithmetic*/