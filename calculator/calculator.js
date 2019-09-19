/* The Logic
1) input numbers -> num 1234567
2) u press a symbols -> operation && make num2 = num1
3) u input more numbers -> grab a new num1
4) u press = -> calculate the result of num1 and num2 and update num1 to that total
doMath()*/


// const input = document.querySelector(".calc");
const screen = document.querySelector(".screen");
let num1 = "0"; // the buffer
let operator = ""; // operand 
let num2 = "0";

// Update the screen
function reRender() {
    screen.innerText = num1;
}

// Clear the shit
function clearBuffer() {
    num1 = '0';
    num2 = '0';
    operator = '';
    reRender();
}

function handleNumber(click) {
    if (num1 === "0") {
        num1 = click;
    } else {
        num1 += click;
    }
    reRender();
}

function handleSymbol(click) {
    switch (click) {
        case 'C':
            clearBuffer();
            break;
        case '←':
            if (num1.length === 1) {
                num1 = "0";
            } else {
                num1 = num1.slice(0, -1);
            }
            break;
        case '=':
            calculate();
            break;
        default:
            operator = click; // Hold onto operation
            num1 = "0"; // Reset num1
    }
    console.log(num1);
    reRender();
}

function calculate() {
    let num1Int = parseInt(num1);
    if (operator === '÷') {
        num1Int /= num2;
    } else if (operator === '+') {
        num1Int += num2;
    } else if (operator === '-') {
        num1Int -= num2;
    } else {
        num1Int *= num2;
    }
    num1 = "" + num1Int;
    // Update the screen with result
    reRender();
}

// Deal with it if it's a Number or Symbol
function handleButtonClick(click) {
    const symbols = ['←', '÷', '×', '-', '+', '=', 'C'];
    // Case: It's a number
    if (!symbols.includes(click)) {
        handleNumber(click);
    } else {
        // Case: It's a symbol
        handleSymbol(click);
    }
}


// Main function listen for clicks
function listen() {
    document.querySelector(".calc").addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            handleButtonClick(event.target.innerText);
        }
    });
}

// Call function
listen()