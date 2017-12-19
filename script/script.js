const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
//console.log(button);
const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg'
];

function updateSrc(src) {
    const image = document.getElementById('photo');
    image.setAttribute('src', src);
}

let index = 0;

function leftButtonClick() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    updateSrc(images[index]);
    //console.log(index);
}

function rightButtonClick() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    updateSrc(images[index]);
    //console.log(index);
}

//function setInterval(updateSrc(), 3000);


btnLeft.addEventListener('click', leftButtonClick);
btnRight.addEventListener('click', rightButtonClick);

setInterval("leftButtonClick()", 3000);




/*const keyLeft = document.getElementById('key-left');
const keyRight = document.getElementById('key-right');

function leftKeyPress() {
    
}

function rightKeyPress() {
    
}

keyLeft.addEventListener('key', leftKeyPress);
keyRight.addEventListener('key', rightKeyPress);*/