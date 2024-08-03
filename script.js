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
const display = document.querySelector(".display");
const one = document.querySelector('#1');
const two = document.querySelector('#2');
const three = document.querySelector('#3');
const four = document.querySelector('#4');
const five = document.querySelector('#5');
const six = document.querySelector('#6');
const seven = document.querySelector('#7');
const eight = document.querySelector('#8');
const nine = document.querySelector('#9');
const zero = document.querySelector('#0');
const period = document.querySelector('#period');
const negative = document.querySelector('#negative');
const clear = document.querySelector('#clear');