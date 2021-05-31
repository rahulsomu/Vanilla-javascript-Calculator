const current = document.querySelector('.current-text');
const result = document.querySelector('.result-text');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const reset = document.querySelector('.reset');
const negative = document.querySelector('.negative');
const dot = document.querySelector('.dot');
const close = document.querySelector('.close');
const theme = document.querySelector('.theme');
const theme1 = document.querySelector('.theme1');
const theme2 = document.querySelector('.theme2');
const theme3 = document.querySelector('.theme3');
const theme4 = document.querySelector('.theme4');
const container = document.querySelector('.container');
const lower = document.querySelector('.lower');
const themeBtn = document.querySelector('.theme-btn');
const body = document.querySelector('body');

let currentArray = '';
let array = '';

const number = document.querySelectorAll('.number');
number.forEach(number => {
  number.addEventListener('click', () => {
    current.textContent = '';
    result.textContent = '';
    result.style.transition = '0s';
    result.style.transform = 'translateX(0)';
    current.style.transition = '0s';
    current.style.transform = 'translateX(0)';
    current.style.color = '#2EC4B6';
    current.style.fontSize = '30px';
    result.style.fontSize = '18px';
    current.style.transition = '.2s';

    result.style.transition = '.2s';
    array = currentArray.concat(number.textContent);
    currentArray = array;

    current.textContent = array;
    if (
      array[array.length - 1] !== '/' &&
      array[array.length - 1] !== '*' &&
      array[array.length - 1] !== '-' && //to show the answer in real time if the last element is a number
      array[array.length - 1] !== '+' &&
      array[array.length - 1] !== '%'
    ) {
      result.textContent = eval(array);
    }
  });
});

const operator = document.querySelectorAll('.operator');
operator.forEach(operator => {
  operator.addEventListener('click', () => {
    if (
      array !== '' &&
      currentArray !== '' &&
      array.slice(-1) !== '-' &&
      array.slice(-1) !== '+' && //to ensure that no two opearators can be typed together
      array.slice(-1) !== '%' &&
      array.slice(-1) !== '/' &&
      array.slice(-1) !== '*'
    ) {
      current.textContent = '';
      result.textContent = '';
      result.style.transition = '0s';
      result.style.transform = 'translateX(0)';
      current.style.transition = '0s';
      current.style.transform = 'translateX(0)';
      array = currentArray.concat(operator.textContent);
      currentArray = array;

      current.textContent = array;
    }
  });
});

equals.addEventListener('click', () => {
  // result.textContent = eval(array);
  // currentArray = '';
  currentArray = '';
  current.style.color = 'gray';
  current.style.fontSize = '18px';
  current.style.transition = '.5s';
  result.style.fontSize = '40px';
  result.style.transition = '.5s';

  //   current.textContent = '';
});
clear.addEventListener('click', () => {
  array = array.slice(0, -1);
  if (
    array[array.length - 1] !== '/' &&
    array[array.length - 1] !== '*' &&
    array[array.length - 1] !== '-' &&
    array[array.length - 1] !== '+' &&
    array[array.length - 1] !== '%'
  ) {
    result.textContent = eval(array);
  }
  currentArray = array;
  current.textContent = array;
  current.style.color = '#2EC4B6';
  current.style.fontSize = '30px';

  result.style.fontSize = '18px';
});

reset.addEventListener('click', () => {
  array = '';
  currentArray = '';

  current.style.color = '#2EC4B6';

  current.style.transition = '.5s';
  current.style.transform = 'translateX(1000px)';
  current.style.fontSize = '30px';
  current.style.transition = '0s';
  result.style.fontSize = '18px';
  result.style.transition = '0s';
  result.style.transition = '.5s';
  result.style.transform = 'translateX(1000px)';
});

negative.addEventListener('click', () => {
  if (array === '') {
    current.textContent = '';
    result.textContent = '';
    result.style.transition = '0s';
    result.style.transform = 'translateX(0)';
    current.style.transition = '0s';
    current.style.transform = 'translateX(0)';
    array = currentArray.concat(negative.getAttribute('value'));
    currentArray = array;

    current.textContent = array;
  }
});

dot.addEventListener('click', () => {
  current.textContent = '';
  result.textContent = '';
  result.style.transition = '0s';
  result.style.transform = 'translateX(0)';
  current.style.transition = '0s';
  current.style.transform = 'translateX(0)';
  array = currentArray.concat(dot.textContent);
  currentArray = array;

  current.textContent = array;
});

close.addEventListener('click', () => {
  close.classList.toggle('close-icon-transform');
  theme.classList.toggle('close-transform');
  themeBtn.classList.toggle('hide');
});

theme1.addEventListener('click', () => {
  body.style.background = 'linear-gradient(180deg, #f6f7f8 80%, #b0f3f1 100%)';
  equals.classList.toggle('light-theme-equals')
  equals.classList.remove('dark-theme-equals')
  equals.classList.remove('pastel-theme-equals')
  equals.classList.remove('bright-theme-equals')
  clear.classList.toggle('light-theme-button-operator');
  reset.classList.toggle('light-theme-button-operator');
  negative.classList.toggle('light-theme-button-number');
  dot.classList.toggle('light-theme-button-number');

  container.classList.toggle('light-theme');
  lower.classList.toggle('light-theme-lower');
  number.forEach(num => {
    num.classList.toggle('light-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.toggle('light-theme-button-operator');
  });

  clear.classList.remove('pastel-theme-button-operator');
  reset.classList.remove('pastel-theme-button-operator');
  negative.classList.remove('pastel-theme-button-number');
  dot.classList.remove('pastel-theme-button-number');

  container.classList.remove('pastel-theme');
  lower.classList.remove('pastel-theme-lower');
  number.forEach(num => {
    num.classList.remove('pastel-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('pastel-theme-button-operator');
  });

  clear.classList.remove('bright-theme-button-operator');
  reset.classList.remove('bright-theme-button-operator');
  negative.classList.remove('bright-theme-button-number');
  dot.classList.remove('bright-theme-button-number');

  container.classList.remove('bright-theme');
  lower.classList.remove('bright-theme-lower');
  number.forEach(num => {
    num.classList.remove('bright-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('bright-theme-button-operator');
  });

  clear.classList.remove('dark-theme-button-operator');
  reset.classList.remove('dark-theme-button-operator');
  negative.classList.remove('dark-theme-button-number');
  dot.classList.remove('dark-theme-button-number');

  container.classList.remove('dark-theme');
  lower.classList.remove('dark-theme-lower');
  number.forEach(num => {
    num.classList.remove('dark-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('dark-theme-button-operator');
  });
});

theme2.addEventListener('click', () => {
  body.style.background = 'linear-gradient(0deg, #111111 0%, #706f6f 100%)';
  equals.classList.toggle('dark-theme-equals')
  equals.classList.remove('light-theme-equals')
  equals.classList.remove('pastel-theme-equals')
  equals.classList.remove('bright-theme-equals')
  clear.classList.toggle('dark-theme-button-operator');
  reset.classList.toggle('dark-theme-button-operator');
  negative.classList.toggle('dark-theme-button-number');
  dot.classList.toggle('dark-theme-button-number');

  container.classList.toggle('dark-theme');
  lower.classList.toggle('dark-theme-lower');
  number.forEach(num => {
    num.classList.toggle('dark-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.toggle('dark-theme-button-operator');
  });

  clear.classList.remove('pastel-theme-button-operator');
  reset.classList.remove('pastel-theme-button-operator');
  negative.classList.remove('pastel-theme-button-number');
  dot.classList.remove('pastel-theme-button-number');

  container.classList.remove('pastel-theme');
  lower.classList.remove('pastel-theme-lower');
  number.forEach(num => {
    num.classList.remove('pastel-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('pastel-theme-button-operator');
  });

  clear.classList.remove('light-theme-button-operator');
  reset.classList.remove('light-theme-button-operator');
  negative.classList.remove('light-theme-button-number');
  dot.classList.remove('light-theme-button-number');

  container.classList.remove('light-theme');
  lower.classList.remove('light-theme-lower');
  number.forEach(num => {
    num.classList.remove('light-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('light-theme-button-operator');
  });

  clear.classList.remove('bright-theme-button-operator');
  reset.classList.remove('bright-theme-button-operator');
  negative.classList.remove('bright-theme-button-number');
  dot.classList.remove('bright-theme-button-number');

  container.classList.remove('bright-theme');
  lower.classList.remove('bright-theme-lower');
  number.forEach(num => {
    num.classList.remove('bright-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('bright-theme-button-operator');
  });
});

theme3.addEventListener('click', () => {
  body.style.background = 'linear-gradient(180deg, #a2f8e7 100%, #19a180 74%)';
  equals.classList.toggle('pastel-theme-equals')
  equals.classList.remove('dark-theme-equals')
  equals.classList.remove('light-theme-equals')
  equals.classList.remove('bright-theme-equals')
  clear.classList.toggle('pastel-theme-button-operator');
  reset.classList.toggle('pastel-theme-button-operator');
  negative.classList.toggle('pastel-theme-button-number');
  dot.classList.toggle('pastel-theme-button-number');

  container.classList.toggle('pastel-theme');
  lower.classList.toggle('pastel-theme-lower');
  number.forEach(num => {
    num.classList.toggle('pastel-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.toggle('pastel-theme-button-operator');
  });

  clear.classList.remove('bright-theme-button-operator');
  reset.classList.remove('bright-theme-button-operator');
  negative.classList.remove('bright-theme-button-number');
  dot.classList.remove('bright-theme-button-number');

  container.classList.remove('bright-theme');
  lower.classList.remove('bright-theme-lower');
  number.forEach(num => {
    num.classList.remove('bright-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('bright-theme-button-operator');
  });

  clear.classList.remove('light-theme-button-operator');
  reset.classList.remove('light-theme-button-operator');
  negative.classList.remove('light-theme-button-number');
  dot.classList.remove('light-theme-button-number');

  container.classList.remove('light-theme');
  lower.classList.remove('light-theme-lower');
  number.forEach(num => {
    num.classList.remove('light-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('light-theme-button-operator');
  });

  clear.classList.remove('dark-theme-button-operator');
  reset.classList.remove('dark-theme-button-operator');
  negative.classList.remove('dark-theme-button-number');
  dot.classList.remove('dark-theme-button-number');

  container.classList.remove('dark-theme');
  lower.classList.remove('dark-theme-lower');
  number.forEach(num => {
    num.classList.remove('dark-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('dark-theme-button-operator');
  });
});

theme4.addEventListener('click', () => {
  body.style.background = '#fddbbb';
  equals.classList.toggle('bright-theme-equals')
  equals.classList.remove('dark-theme-equals')
  equals.classList.remove('pastel-theme-equals')
  equals.classList.remove('light-theme-equals')
  clear.classList.toggle('bright-theme-button-operator');
  reset.classList.toggle('bright-theme-button-operator');
  negative.classList.toggle('bright-theme-button-number');
  dot.classList.toggle('bright-theme-button-number');

  container.classList.toggle('bright-theme');
  lower.classList.toggle('bright-theme-lower');
  number.forEach(num => {
    num.classList.toggle('bright-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.toggle('bright-theme-button-operator');
  });

  clear.classList.remove('pastel-theme-button-operator');
  reset.classList.remove('pastel-theme-button-operator');
  negative.classList.remove('pastel-theme-button-number');
  dot.classList.remove('pastel-theme-button-number');

  container.classList.remove('pastel-theme');
  lower.classList.remove('pastel-theme-lower');
  number.forEach(num => {
    num.classList.remove('pastel-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('pastel-theme-button-operator');
  });

  clear.classList.remove('light-theme-button-operator');
  reset.classList.remove('light-theme-button-operator');
  negative.classList.remove('light-theme-button-number');
  dot.classList.remove('light-theme-button-number');

  container.classList.remove('light-theme');
  lower.classList.remove('light-theme-lower');
  number.forEach(num => {
    num.classList.remove('light-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('light-theme-button-operator');
  });

  clear.classList.remove('dark-theme-button-operator');
  reset.classList.remove('dark-theme-button-operator');
  negative.classList.remove('dark-theme-button-number');
  dot.classList.remove('dark-theme-button-number');

  container.classList.remove('dark-theme');
  lower.classList.remove('dark-theme-lower');
  number.forEach(num => {
    num.classList.remove('dark-theme-button-number');
  });
  operator.forEach(num => {
    num.classList.remove('dark-theme-button-operator');
  });
});
