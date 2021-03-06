const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const dotList = document.querySelector('.dot-list');

const images = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg'
];

function createDot() {
  // 1. Stworzyć element input typu radio z odpowiednim name
  let dot = document.createElement('input');
  dot.type = 'radio';
  dot.name = 'dot';
  // 2. Wyrenderować (stworzyć) input w liście dotList
  dotList.appendChild(dot);
}

images.forEach(createDot);

const leftKeyCode = 37;
const rightKeyCode = 39;

let clock = setInterval(next, 3000); //setInterval zwraca cyfrę

function updateSrc(src) {
  const image = document.querySelector('.photo');
  image.setAttribute('src', src);
  markDot(index);
}

let index = 0;
updateSrc(images[index]);

function leftButtonClick() {
  clearInterval(clock);
  prev();
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
  clearInterval(clock);
  next();
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
  clearInterval(clock);
  let nodes = Array.from(dotList.children);
  index = nodes.indexOf(evt.target);
  updateSrc(images[index]);
  clock = setInterval(next, 3000);
}

function markDot(dotIndex) {
  if (dotIndex < 0) {
    return;
  }
  let nodes = Array.from(dotList.children);
  let dot = nodes[dotIndex];
  dot.checked = true;
}

btnLeft.addEventListener('click', leftButtonClick);
btnRight.addEventListener('click', rightButtonClick);
dotList.addEventListener('click', dotChange);
