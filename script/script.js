class Slider {

  constructor(choose) {
    this.settings = {
      name: 'no-name',
      element: null,
      time: 3000
    };
    Object.assign(this.settings, choose);

    this.index = 0;
    this.clock = null;

  //const sliderTest = new Slider('czarek', 3000);

  this.btnLeft = document.querySelector('.btn-left');
  this.btnRight = document.querySelector('.btn-right');
  this.dotList = document.querySelector('.dot-list');

  this.images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg'
  ];

  function createDot() {
    // 1. Stworzyć element input typu radio z odpowiednim name
    this.dot = document.createElement('.input');
    this.dot.type = 'radio';
    dot.name = 'dot';
    // 2. Wyrenderować (stworzyć) input w liście dotList
    this.dotList.appendChild(dot);
  }

  this.images.forEach(this.createDot);

  this.leftKeyCode = 37;
 this.rightKeyCode = 39;

  let clock = setInterval(next, 3000); //setInterval zwraca cyfrę

  function updateSrc(src) {
    this.image = document.querySelector('.photo');
    this.image.setAttribute('src', src);
    markDot(index);
  }

  let index = 0;
  updateSrc(this.images[index]);

  function leftButtonClick() {
    setTime();
    prev();
    setTime();
  }

  function prev() {
    index--;
    if (index < 0) {
      index = this.images.length - 1;
    }
    let temp = this.images[index];
    updateSrc(temp);
  }

  function rightButtonClick() {
    setTime();
    next();
    setTime();
  }

  function next() {
    index++;
    if (index >= this.images.length) {
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
    setTime();
    let nodes = Array.from(dotList.children);
    index = nodes.indexOf(evt.target);
    let temp = images[index];
    updateSrc(temp);
    setTime();
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

  function setTime() {
    clearInterval(clock);
    clock = setInterval(next, 3000);
  }
  }
}
