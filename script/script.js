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
//let leftKey = 37;
let rightKey = 39;

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

window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37: // Left
            index++;
            if (index >= images.length) {
                index = 0;
            }
            updateSrc(images[index]);
            //alert('Lewo');
            break;

        case 39: // Right
            index++;
            if (index >= images.length) {
                index = 0;
            }
            updateSrc(images[index]);
            //alert('Prawo');
            break;

    }
}, true);

btnLeft.addEventListener('click', leftButtonClick);
btnRight.addEventListener('click', rightButtonClick);

setInterval("rightButtonClick()", 3000);
