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
    array = currentArray.concat(number.textContent);
    currentArray = array;

    current.textContent = array;
    if (
      array[array.length - 1] !== '/' &&
      array[array.length - 1] !== '*' &&
      array[array.length - 1] !== '-' &&
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
    if (array !== '') {
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
  result.textContent = eval(array);
  currentArray = '';
  current.style.color = 'gray';
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
});

reset.addEventListener('click', () => {
  array = '';
  currentArray = '';

  current.style.color = '#2EC4B6';
  current.style.transition = '1s';
  current.style.transform = 'translateX(1000px)';
  result.style.transition = '1s';
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

close.addEventListener('click',()=>{
  theme.classList.toggle('close-transform')
})

theme1.addEventListener('click',()=>{
  clear.classList.toggle('light-theme')
  reset.classList.toggle('light-theme')
  negative.classList.toggle('light-theme')
  reset.classList.toggle('light-theme')
  dot.classList.toggle('light-theme')


  container.classList.toggle('light-theme')
  lower.classList.toggle('light-theme')
  number.forEach((num)=>{
    num.classList.toggle('light-theme-button-number')
  })
  operator.forEach((num)=>{
    num.classList.toggle('light-theme-button-operator')
  })

})

theme2.addEventListener('click',()=>{
  clear.classList.toggle('dark-theme-button-operator')
  reset.classList.toggle('dark-theme-button-operator')
  negative.classList.toggle('dark-theme-button-operator')
  dot.classList.toggle('dark-theme-button-operator')

  container.classList.toggle('dark-theme')
  lower.classList.toggle('dark-theme')
  number.forEach((num)=>{
    num.classList.toggle('dark-theme-button-number')
  })
  operator.forEach((num)=>{
    num.classList.toggle('dark-theme-button-operator')
  })

})

theme3.addEventListener('click',()=>{

  clear.classList.toggle('pastel-theme')
  reset.classList.toggle('pastel-theme')
  negative.classList.toggle('pastel-theme-button-number')
  dot.classList.toggle('pastel-theme-button-number')


  container.classList.toggle('pastel-theme')
  lower.classList.toggle('pastel-theme-lower')
  number.forEach((num)=>{
    num.classList.toggle('pastel-theme-button-number')
  })
  operator.forEach((num)=>{
    num.classList.toggle('pastel-theme-button-operator')
  })

})

theme4.addEventListener('click',()=>{
  
  clear.classList.toggle('bright-theme-button-operator')
  reset.classList.toggle('bright-theme')
  negative.classList.toggle('bright-theme-button-number')
  dot.classList.toggle('bright-theme-button-number')


  container.classList.toggle('bright-theme')
  lower.classList.toggle('bright-theme-lower')
  number.forEach((num)=>{
    num.classList.toggle('bright-theme-button-number')
  })
  operator.forEach((num)=>{
    num.classList.toggle('bright-theme-button-operator')
  })

})