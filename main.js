const clear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-del]');
const number = document.querySelectorAll('[data-num]');
const point = document.querySelector('data-point');
const operator = document.querySelectorAll('[data-operation]');
const display = document.querySelector('.show-input');
let array = [];
clear.addEventListener('click', function (e) {
  e.preventDefault();
  display.value = '';
  array = [];
});
del.addEventListener('click', function (e) {
  e.preventDefault();
  let lengthOfDisplayVal = display.value.length;
  display.value = display.value.slice(0, lengthOfDisplayVal - 1);
  if (lengthOfDisplayVal === 0) {
    display.value = '';
  }
});
let decimalcounter = 0;
number.forEach((element, index) => {
  element.addEventListener('click', function (e) {
    if (index === 9) {
      decimalcounter++;
      e.preventDefault();
      display.value += '.';
      if (decimalcounter > 1 && display.value.includes('.')) {
        e.preventDefault();
        let lengthOfDisplayVal = display.value.length;
        display.value = display.value.slice(0, lengthOfDisplayVal - 1);
        return display.value;
      }
    } else if (decimalcounter >= 0 && !display.value.includes('.')) {
      e.preventDefault();
      decimalcounter = 0;
      display.value += element.textContent;
    }
  });
});
