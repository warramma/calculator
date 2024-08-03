function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num1 > 0 && num2 == 0)
        return 'undefined';
    return num1 / num2;
}

let num1, num2, operator;

function operate(operator, num1, num2){
    switch(operator.toLowerCase()){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 0;
        
    }
}
//-----------select number buttons------
const display = document.querySelector(".display");
const displayText = display.querySelector('p');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const period = document.querySelector('#period');
const negative = document.querySelector('#negative');
const clear = document.querySelector('#clear');
//-------create event listeners for numbers
//addNum function
function addNum(num){
    let text = document.createTextNode(`${num}`);
    if (displayText.textContent == '0'){
        displayText.textContent = "";
    }
    displayText.appendChild(text);
}
//number event listeners
zero.addEventListener("click", ()=>{
    addNum(0);
    event.stopPropagation();
});
one.addEventListener("click", ()=>{
    addNum(1);
    event.stopPropagation();
});
two.addEventListener("click", ()=>{
    addNum(2);
    event.stopPropagation();
});
three.addEventListener("click", ()=>{
    addNum(3);
    event.stopPropagation();
});
four.addEventListener("click", ()=>{
    addNum(4);
    event.stopPropagation();
});
five.addEventListener("click", ()=>{
    addNum(5);
    event.stopPropagation();
});
six.addEventListener("click", ()=>{
    addNum(6);
    event.stopPropagation();
});
seven.addEventListener("click", ()=>{
    addNum(7);
    event.stopPropagation();
});
eight.addEventListener("click", ()=>{
    addNum(8);
    event.stopPropagation();
});
nine.addEventListener("click", ()=>{
    addNum(9);
    event.stopPropagation();
});
//clear button
clear.addEventListener("click", ()=>{
    displayText.textContent = "0";
    event.stopPropagation();
});