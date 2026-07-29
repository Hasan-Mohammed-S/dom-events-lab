/* -------------------------------- Constants --------------------------------*/
/* -------------------------------- State --------------------------------*/
let firstNum = '';
let secondNum = '';
let operator = '';
let result = 0;

/* ------------------------ Cached Element References ------------------------*/
const calcEl = document.querySelector('#calculator');
const displayEl = document.querySelector('.display');

/* -------------------------------- Functions --------------------------------*/
function render(value, replace = true) {
    if (replace) {
        displayEl.textContent = value;
    } else {
        displayEl.textContent += value;
    }
}

function calculateResult() {
    const parseFirst = parseInt(firstNum);
    const parseSecond = parseInt(secondNum);

    if (operator === '+') {
        result = parseFirst + parseSecond;
    } else if (operator === '-') {
        result = parseFirst - parseSecond;
    } else if (operator === '*') {
        result = parseFirst * parseSecond;
    } else if (operator === '/') {
        if (parseSecond === 0) {
            result = 'error';
        } else {
            result = parseFirst / parseSecond;
        }
    }

    render(result);
}

function reset() {
    firstNum = '';
    secondNum = '';
    operator = '';
    result = 0;
    render(result);
}

function getNumber(el) {
    if (operator) {
        secondNum += el.textContent;
        render(secondNum);
    } else {
        firstNum += el.textContent;
        render(firstNum);
    }
}

/* ----------------------------- Event Listeners -----------------------------*/
calcEl.addEventListener('click', function(e) {
    const clickedEl = e.target;

    if (clickedEl.classList.contains('number')) {
        getNumber(clickedEl);
    } else if (clickedEl.classList.contains('operator')) {
        if (clickedEl.textContent.toLowerCase() === 'c') {
            reset();
        } else {
            operator = clickedEl.textContent;
            render(operator, false);
        }
    } else if (clickedEl.classList.contains('equals')) {
        calculateResult();
    }
});