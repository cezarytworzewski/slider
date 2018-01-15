const lewyPrzycisk = document.getElementById('left-btn');
const prawyPrzycisk = document.getElementById('right-btn');
const kropkiSlider = document.querySelector('.kropki-slider');

const tablicaZdjec = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg'
];

let index = 0;

function aktualizacja(src) {
  const zdjecie = document.getElementById('photo');
  zdjecie.setAttribute('src', src);
  podswietlKropke(index);
}

function klikniecieLewyPrzycisk() {
  clearInterval(time);
  poprzednie();
  time = setInterval(nastepne, 3000);
}

function kliknieciePrawyPrzycisk() {
  clearInterval(time);
  nastepne();
  time = setInterval(nastepne, 3000);
}

let time = setInterval(nastepne, 3000);

function poprzednie() {
  index--;
  if (index < 0) {
    index = tablicaZdjec.length - 1;
  }
  aktualizacja(tablicaZdjec[index]);
}

function nastepne() {
  index++;
  if (index >= tablicaZdjec.length) {
    index = 0;
  }
  aktualizacja(tablicaZdjec[index]);
}

const lewyKursor = 37;
const prawyKursor = 39;

window.addEventListener('keydown', function (zdarzenie) {
  switch (zdarzenie.keyCode) {
    case lewyKursor:
      klikniecieLewyPrzycisk();
      break;
    case prawyKursor:
      kliknieciePrawyPrzycisk();
      break;
  }
}, true);

function tworzKropki() {
  let kropka = document.createElement('input');
  kropka.type = 'radio';
  kropka.name = 'kropka';
  kropkiSlider.appendChild(kropka);
}

tablicaZdjec.forEach(tworzKropki);

function zmianaKropki(evt) {
  clearInterval(time);
  let nodes = Array.from(kropkiSlider.children);
  index = nodes.indexOf(evt.target);
  aktualizacja(tablicaZdjec[index]);
  time = setInterval(nastepne, 3000);
}

function podswietlKropke(numer) {
  if (numer < 0) {
    return;
  }
  let nodes = Array.from(kropkiSlider.children);
  let kropka = nodes[numer];
  kropka.checked = true;
}

lewyPrzycisk.addEventListener('click', klikniecieLewyPrzycisk);
prawyPrzycisk.addEventListener('click', kliknieciePrawyPrzycisk);
kropkiSlider.addEventListener('click', zmianaKropki);
