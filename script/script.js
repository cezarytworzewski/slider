const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const dotList = document.querySelector('.dot-list');
//console.log(button);
const images = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg'
];
const leftKeyCode = 37;
const rightKeyCode = 39;

console.log('setInterval');
let clock = setInterval(next, 3000); //setInterval zwraca cyfrę

function updateSrc(src) {
  const image = document.getElementById('photo');
  image.setAttribute('src', src);
  markDot(index);
}

let index = 0;

function leftButtonClick() {
  console.log('clearInterval');
  clearInterval(clock);
  prev();
  console.log('setInterval');
  clock = setInterval(next, 3000);
}

function prev() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateSrc(images[index]);
}

function rightButtonClick() {
  console.log('clearInterval');
  clearInterval(clock);
  next();
  console.log('setInterval');
  clock = setInterval(next, 3000);
}

function next() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  let temp = images[index];
  updateSrc(temp);
}


window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case leftKeyCode:
      leftButtonClick();
      break;

    case rightKeyCode:
      rightButtonClick();
      break;

  }
}, true);

function dotChange(evt) {
  //console.log('dotChange', evt);
  clearInterval(clock);
  let nodes = Array.prototype.slice.call(dotList.children);
  index = nodes.indexOf(evt.target);
  updateSrc(images[index]);
  clock = setInterval(next, 3000);
}

function markDot(dotIndex) {
  let nodes = Array.prototype.slice.call(dotList.children);
  let dot = nodes[dotIndex];
  dot.checked = true;
}

btnLeft.addEventListener('click', leftButtonClick);
btnRight.addEventListener('click', rightButtonClick);
dotList.addEventListener('click', dotChange);
