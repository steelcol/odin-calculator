
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }


function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result;

    switch(operator) {
        case '+':
            result = add(num1, num2);
            return result.toString().length > 13 ? result.toExponential() : result;
        case '-':
            result = subtract(num1, num2);
            return result.toString().length > 13 ? result.toExponential() : result;
        case '*':
            result = multiply(num1, num2);
            return result.toString().length > 13 ? result.toExponential() : result;
        case '/': 
            if (num2 === 0){
                return 'ERROR DIV BY 0';
            }
            result = divide(num1, num2);
            return result.toString().length > 13 ? result.toPrecision(10) : result;
        default: 
            return 'ERROR';
    }
}

let num1 = '';
let num2 = '';
let operator = '';
let hisDisplay = '';
let reset = false;
let decimal = false;

const display = document.querySelector('#main-display');
const history = document.querySelector('#second-display')



document.querySelectorAll('.operand').forEach(button => {
    button.addEventListener('click', function() {
        // Pressing a number operand after calculating result
        if (reset === true && button.value != '.'){
            display.textContent = '';
            history.textContent = '';
            num1 = '';
            num2 = '';
            operator = '';
            reset = false;
        }

        // Handle decimals
        if (button.value == '.'){
            if (!operator && !num1){
                num1 = '0.';
                display.textContent = num1;
            }

            else if (operator && !num2){
                num2 = '0.';
                display.textContent = num2;
            }

            if (!operator && num1 && !num1.includes('.')){
                num1 += button.value;
                display.textContent = num1;
            }

            else if (operator && num2 && !num2.includes('.')){
                num2 += button.value;
                display.textContent = num2;
            }
        }


        // Handle first & second number
        else {
            // If operator yet selected, keep adding to first number
            if (!operator){
                num1 += button.value;
                display.textContent = num1;
            }

            // If operator selected, continously add to the second number
            else if (operator){
                num2 += button.value;
                display.textContent = num2;
            }
        }

    });
});


document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        if (button.value == '='){
            if (num1 && num2 && operator){
                history.textContent = num1 + ' ' + operator + ' ' + num2 + ' ' + button.value;

                num1 = operate(operator, num1, num2);
                display.textContent = num1;

                operator = '';
                num2 = '';
                reset = true;
            }
        } else {
            if (num1){
                reset = false;
                operator = button.value;
                display.textContent = '';
                history.textContent = num1 + ' ' + button.value;
            }
        }


    });
});


// Clear (AC) button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(){
    display.textContent = '';
    history.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
});

// Percent button
const percentButton = document.querySelector('.percent');
percentButton.addEventListener('click', function(){

    if (reset == true){
        num1 = Number(num1) / 100;
        display.textContent = num1;
    }

    if (!operator && num1) {
        num1 = Number(num1) / 100;
        display.textContent = num1;
    } 
    else if (operator && num2) {
        num2 = Number(num2) / 100;
        display.textContent = num2;
    }
})

// Sign (+/-) button
const signButton = document.querySelector('.sign');
signButton.addEventListener('click', function(){
    if (!operator && num1){
        num1 = Number(num1);
        num1 *= -1;
        display.textContent = num1;
    }
    else if (operator && num1){
        num2 = Number(num2);
        num2 *= -1;
        display.textContent = num2;
    };

});



// Mouseover button highlight
document.querySelectorAll('.sign, .clear, .percent, .operand, .operator').forEach(button => {
    button.addEventListener('mouseover', function() {
        button.classList.add('hover-light');
    });
    button.addEventListener('mouseout', function() {
        button.classList.remove('hover-light');
    });
});


// document.querySelector('.operator[value="="]').addEventListener('click', evaluate);
