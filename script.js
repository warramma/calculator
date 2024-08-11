//operation functions

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
        return 'Yeah no 😏 we don\'t divide by 0 round here';
    return num1 / num2;
}

//operate: determines operator and applies operation
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

//-----------------making it work--------
let num1 = null;
let num2 = null;
let operator = '';

//-------create event listeners for numbers
//addNum function: adds numbers to display
function addNum(num){
    if(decimal == false && num==="."){
        const text = displayText.textContent;
        displayText.textContent = `${text}${num}`;
    }
    else if(decimal == true && num==='.'){
        displayText.textContent = "";
        displayText.textContent = "Error, doesn't support multiple decimals";
    }
    else if (displayText.textContent == '0'){
        displayText.textContent = "";
        let text = displayText.textContent;
        displayText.textContent = `${text}${num}`;
    }
    else if(replaceNum1 == true){
        displayText.textContent = "";
        replaceNum1 = false;
        let text = displayText.textContent;
        displayText.textContent = `${text}${num}`;
    }
    else{
    let text = displayText.textContent;
    displayText.textContent = `${text}${num}`;
    }
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
//clear button - clears display and resets variables
clear.addEventListener("click", ()=>{
    displayText.textContent = "0";
    num1 = null;
    num2 = null;
    operator = '';
    decimal = false;
    console.log(`cleared 1: ${num1}, cleared 2: ${num2}`);
    event.stopPropagation();
});

//------select operation and event elements
const divisionOp = document.querySelector('#divide');
const multiplyOp = document.querySelector('#multiply');
const addOp = document.querySelector('#add');
const subtractOp = document.querySelector('#subtract');
const enterBtn = document.querySelector('#enter');

//---updateOP function: assigns operation to operator unless operation already exists, in that case, performs existing operation
//also assigns num1 and num2
let replaceNum1 = false; //whether or not to update display 

function updateOp(operation){
    if (operator ==''){
        operator = operation
        replaceNum1 = true;
    }
    if(num1 == null){
        const num1input = parseFloat(displayText.textContent)
        num1 = num1input;
        replaceNum1 = true;
    }
    else if(num1!=null && num2==null){
        const num2input = parseFloat(displayText.textContent);
        num2 = num2input;
        
        let result = operate(operator, num1, num2);
        if(typeof result == "number")
            result = Math.round(result * 1000) / 1000;

        displayText.textContent = `${result}`;
        num1 = result;
        num2 = null;
        operator = operation;
        decimal = false;
        replaceNum1 = true;
    }
    
   
}

//enter function: assigns num2, performs chosen operation, displays result
function enter(){
    if(operator!=''){
        let num2input = parseFloat(displayText.textContent);
        num2 = num2input;
    }
    let result = operate(operator, num1, num2);
    
    if(typeof result == "number")
        result = Math.round(result * 1000) / 1000;
    displayText.textContent = `${result}`;
    num1 = result;
    num2 = null;
    operator = '';
    decimal = false;
}

//----operator and enter event listeners
divisionOp.addEventListener("click", ()=>{
    updateOp('/');
    event.stopPropagation();
})

multiplyOp.addEventListener("click", ()=>{
    updateOp('*');
    event.stopPropagation();
})

addOp.addEventListener("click", ()=>{
    updateOp('+');
    event.stopPropagation();
})
subtractOp.addEventListener("click", ()=>{
    updateOp('-');
    event.stopPropagation();
})

enterBtn.addEventListener("click", ()=>{
    enter();
    event.stopPropagation();
})


//-----------EXTENSIONS---------------

//decimals
let decimal = false;

period.addEventListener("click", ()=>{
    addNum(".");
    decimal = true;
    console.log("decimal", decimal);
    
    event.stopPropagation();
});


console.log(parseFloat("5.3") + 5);