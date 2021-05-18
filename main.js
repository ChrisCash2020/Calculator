const clear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-del]');
const number = document.querySelectorAll('[data-num]');
const point = document.querySelector('[data-point]');
const operator = document.querySelectorAll('[data-operation]');
const display = document.querySelector('.show-input');
let array = [];
clear.addEventListener('click', function (e) {
  e.preventDefault();
  display.value = '';
  while (array.length > 0) {
    array.pop();
  }
  console.log(array);
});
del.addEventListener('click', function (e) {
  e.preventDefault();
  let lengthOfDisplayVal = display.value.length;
  display.value = display.value.slice(0, lengthOfDisplayVal - 1);
  if (lengthOfDisplayVal === 0) {
    display.value = '';
  }
});

number.forEach((element, index) => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    display.value += element.textContent;
  });
});
let tempPoint = '.';
point.addEventListener('click', function (e) {
  e.preventDefault();
  display.value += tempPoint;
  if (display.value.includes('.')) {
    tempPoint = '';
  }
});

operator.forEach((element) => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    if (display.value != '') {
      array.push(parseInt(display.value));
      display.value = '';
    }
    console.log(array);
  });
});
