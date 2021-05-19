const clear = document.querySelector('[data-clear]');
const del = document.querySelector('[data-del]');
const number = document.querySelectorAll('[data-num]');
const point = document.querySelector('[data-point]');
const operator = document.querySelectorAll('[data-operation]');
const display = document.querySelector('.show-input');
var array = [];
let operationCounter = 0;
clear.addEventListener('click', function (e) {
  e.preventDefault();
  display.value = '';
  // while loops that go onto the length is greater than 0  completely clear the array list
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
    //this solves an issue where numbers would be added onto the solution after an operation
    if (operationCounter != 0) {
      display.value = '';
      display.value += element.textContent;
      operationCounter = 0;
    }
  });
});
let tempPoint = '.';
// It was better to use easily manipulated string than the textContent so issues wouldn't occur
point.addEventListener('click', function (e) {
  e.preventDefault();
  display.value += tempPoint;
  if (display.value.includes('.')) {
    tempPoint = '';
  }
});

let operation = (currentype, a, b) => {
  let result;

  console.log(operationCounter);
  // I would perform the operation based on the currentype i got from if statement in the operator event listener, then perform the operation and then reassign undefined to the currentype bc it would remain the same other wise

  if (currentype == '+') {
    result = a + b;
    array.push(result);
    array.shift();
    array.shift();
    display.value = result;
    currentype = undefined;
  }
  if (currentype == '-') {
    result = a - b;
    array.push(result);
    array.shift();
    array.shift();
    display.value = result;
    currentype = undefined;
  }
  if (currentype == '*') {
    result = a * b;
    array.push(result);
    array.shift();
    array.shift();
    display.value = result;
    currentype = undefined;
  }
  if (currentype == '/') {
    result = a / b;
    array.push(result);
    array.shift();
    array.shift();
    display.value = result;
    currentype = undefined;
  }
  console.log(currentype);
  return;
};

let currentype;
operator.forEach((element) => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    if (display.value != '') {
      //if statements are written this way because of the top down nature of javascript and I want all the statements to run
      if (operationCounter == 0) {
        //as long as an operation isn't triggered its going to be pushing the textContent, needed to do this so it wouldn't constantly push the solution from the operator, its hard to explain remove the statement and see what i mean
        array.push(parseInt(display.value));
      } else if (operationCounter != 0) {
        display.value = '';
        operationCounter = 0;
      }
      display.value = '';
      // always want to the screen to be blank when clicked again after the operation function happens
      if (array.length == 1) {
        currentype = element.textContent;
      }
    }
    if (array.length == 2) {
      //selfexplantor runs the operation function and increses the counter so all the previous event listeners know how to behave why the counter is above a threshold
      operation(currentype, array[0], array[1]);
      operationCounter++;
      //updates the current type so the continuous operation can occur
      currentype = element.textContent;
    }
    console.log(array);
    console.log(currentype);
  });
});
