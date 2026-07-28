/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let number_1 = '';
let number_2 = '';
let operator = '';
let total = 0;




/*------------------------ Cached Element References ------------------------*/


const buttons = document.querySelectorAll('.button');
const display = document.querySelector('#display');
const calculator = document.querySelector('#calculator');

function handleClick(event) {



}

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", handleClick);

/*-------------------------------- Functions --------------------------------*/





buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        console.log(event.target.innerText);
        // Future logic to capture the button's value would go here...
    });
});


calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);

    // Example
    if (event.target.classList.contains('number')) {

    }

    if (event.target.innerText === '+') {
        total += number_1 + number_2

        console.log(total)

    }

    if (event.target.innerText === '-') {
        total -= number_1 - number_2
        console.log(total)

    }

    // Example
    if (event.target.innerText === '*') {
        total *= number_1 * number_2
        console.log(total)

    }

    if (event.target.innerText === '/') {
        total /= number_1 / number_2
        if (event.target.innerText === '=') {
            console.log(total)
        }
    }

    if (event.target.innerText === 'c') {
        total = 0;
        console.log(total)

    }
});