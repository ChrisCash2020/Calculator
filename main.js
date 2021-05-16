function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let showInput = document.querySelector('.show-input');
let num = document.querySelectorAll('[data-num]');
let operator = document.querySelectorAll('[data-operation]');
let val = [];
num.forEach((element) => {
  element.addEventListener('click', function (e) {
    if (showInput.value == val[0]) {
      document.forms[0].reset();
      e.preventDefault();
      showInput.value += `${e.target.textContent}`;
    } else {
      e.preventDefault();
      showInput.value += `${e.target.textContent}`;
    }
  });
});
let counter = 0;
let storeIndex;
operator.forEach((elment, index) => {
  elment.addEventListener('click', function (e) {
    e.preventDefault();
    counter++;
    val.push(parseInt(showInput.value));
    document.forms[0].reset();
    console.log(val);
    if (counter == 1) {
      storeIndex = index;
    }
    switch (index) {
      case (storeIndex = 0):
        console.log('division');
        if (counter == 2) {
          val.push(val[0] / val[1]);
          val.shift();
          val.shift();
          showInput.value = val[0];
          counter = 1;
        }
        break;
      case (storeIndex = 1):
        console.log('multiplication');
        if (counter == 2) {
          val.push(val[0] * val[1]);
          val.shift();
          val.shift();
          showInput.value = val[0];
          counter = 1;
        }
        break;
      case (storeIndex = 2):
        console.log('subtraction');
        if (counter == 2) {
          val.push(val[0] - val[1]);
          val.shift();
          val.shift();
          showInput.value = val[0];
          counter = 1;
        }
        break;
      case (storeIndex = 3):
        console.log('equals');
        if (counter == 2) {
          val.shift();
          val.shift();
          showInput.value = val[0];
          counter = 1;
        }
        break;
      case (storeIndex = 4):
        console.log('addition');
        if (counter == 2) {
          val.push(val[0] + val[1]);
          val.shift();
          val.shift();
          showInput.value = val[0];
          counter = 1;
        }
        break;
    }
  });
});
