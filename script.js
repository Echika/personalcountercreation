let value = document.querySelector('#value');

let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');

let count = 0;

decrease.addEventListener('click', () => {
    count--;
    updateDisplay();
});

increase.addEventListener('click', () => {
    count++;
    updateDisplay();
});

reset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
})

function updateDisplay () {
    value.innerHTML = count;
}