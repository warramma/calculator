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
    
    if (displayText.textContent == '0'){
        displayText.textContent = "";
    }
    let text = displayText.textContent;
    displayText.textContent = `${text}${num}`;
    console.log(displayText);
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
    num1 = null;
    num2 = null;
    operator = '';
    event.stopPropagation();
});
//-----------------making it work--------
num1 = null;
num2 = null;
operator = '';


//------add operator event listeners
const divisionOp = document.querySelector('#divide');
const multiplyOp = document.querySelector('#multiply');
const addOp = document.querySelector('#add');
const subtractOp = document.querySelector('#subtract');

///need to think this through more, maybe set up each operation first, then think about edge cases. 
//each operation should work like this:
//type in a number, when press operator, store that number in num1, repeat for num2
//if num2 is not null and another opeator is pressed (enter or not), display result of previous operation.


//extract displayText.textcontent and save to either num1 or num2
    //assign op to operator if operator is empty
    //if both nums are not null then call operate(operator) and reset num1, num2, and operator
    //if num2 is empty do nothing
    
//enter key
