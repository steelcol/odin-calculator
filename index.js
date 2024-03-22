
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){

    if (operator == 'add'){
        return add(num1, num2);
    }
    else if (operator == 'subtract'){
        return substract(num1, num2);
    }
    else if (operator == 'multiply'){
        return multiply(num1, num2);
    }
    else if (operator == 'divide'){
        return divide(num1, num2);
    }
    else {return 'ERROR'};
}

console.log(operate('add', 1, 2));
console.log(operate('subtract', 1, 2));
console.log(operate('multiply', 1, 2));
console.log(operate('divide', 1, 2));
console.log(operate('bad', 1, 2));


// Button highlighting on mouseover
document.querySelectorAll('.sign, .clear, .percent, .operand, .operator').forEach(button => {
    button.addEventListener('mouseover', function() {
        button.classList.add('hover-effect');
    });

    button.addEventListener('mouseout', function() {
        button.classList.remove('hover-effect');
    });
});
