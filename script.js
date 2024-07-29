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