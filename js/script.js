// CAROUSEL

// Esercizio svolto con all'interno gli elmenti in html

/*const imageMain = document.getElementsByClassName('carousel__main__image');
const imageControl = document.getElementsByClassName('carousel__control__image');

const slideUp = document.querySelector('.up');
const slideDown = document.querySelector('.down');

let currentPos = 0
// console.log(imageMain[currentPos]);
// console.log(imageControl[currentPos]);

slideUp.addEventListener('click',function() {
  // console.log(slideUp);

  imageMain[currentPos].classList.remove('active');
  // console.log(imageMain[currentPos]);

  imageControl[currentPos].classList.remove('active');

  currentPos--;
  if (currentPos < 0 ) {
    currentPos = imageMain.length - 1;
  }

  imageMain[currentPos].classList.add('active');
  imageControl[currentPos].classList.add('active');

});


slideDown.addEventListener('click',function() {

  imageMain[currentPos].classList.remove('active');
  imageControl[currentPos].classList.remove('active');

  currentPos++;
  if (currentPos > imageMain.length -1 ) {
    currentPos = 0;
  }

  imageMain[currentPos].classList.add('active');
  imageControl[currentPos].classList.add('active');

  // console.log(currentPos);
}); */



// Esercizio svolto con gli elementi in js


// Creo i database delle immagini e dei testi con degli arrey
const databaseImage = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const captionTitle = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const captionText = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


// Inizializzo le costanti dove voglio successivamente inserire i miei elementi 
const carouselMain = document.querySelector('.carousel__main');
// console.log(carouselMain)
const carouselControl = document.querySelector('.carousel__control');


// Inizializzo la variabile della poszione corrente degli elementi presenti nel mio carousel 
let currentPos = 0;


for (let i = 0; i < databaseImage.length; i++) {
  // console.log(databaseImage[i]);

  const carouselMainImage = document.createElement('div');
  carouselMainImage.className = 'carousel__main__image';
  // console.log(carouselMainImage);

  const carouselControlImage = document.createElement('div');
  carouselControlImage.className = 'carousel__control__image';


  if (i === currentPos) {
    carouselMainImage.classList.add('active');
    // console.log(carouselMainImage);
    carouselControlImage.classList.add('active');
  }
  // console.log(carouselMainImage);
  // console.log(currentPos);

  carouselMainImage.innerHTML = `
  <img src="${databaseImage[i]}" alt=""> 
  <div class="carousel__main__image__text">
    <h3>${captionTitle[i]}</h3>
    <p>${captionText[i]}</p>
  </div>
  `;
  // console.log(carouselMainImage.innerHTML);
  carouselControlImage.innerHTML = `<img src="${databaseImage[i]}" alt="img1">`

  carouselMain.append(carouselMainImage);
  carouselControl.append(carouselControlImage);

}


const imageMain = document.getElementsByClassName('carousel__main__image');
const imageControl = document.getElementsByClassName('carousel__control__image');


// Inizializzo le costanti dei bottoni
const slideUp = document.querySelector('.up');
const slideDown = document.querySelector('.down');


// Creo le funzioni al click dei bottoni
slideUp.addEventListener('click',function() {
  // console.log(slideUp);


  // Al click rimuovo la classe active allelemento presente 
  imageMain[currentPos].classList.remove('active');
  // console.log(imageMain[currentPos]);
  imageControl[currentPos].classList.remove('active');


  // Creo la condizione che al click dell'up il contatore conta indietro e non deve mai andare oltre alla lunghezza massima degli elementi 
  currentPos--;
  if (currentPos < 0 ) {
    currentPos = imageMain.length - 1;
  }


  // Al click aggiungo la classe active al nuovo elemento
  imageMain[currentPos].classList.add('active');
  imageControl[currentPos].classList.add('active');

});


// Stessa funzione a quella procedente solo che stavolta invece di contare indietro contiamo in avanti
slideDown.addEventListener('click',function() {

  imageMain[currentPos].classList.remove('active');
  imageControl[currentPos].classList.remove('active');

  currentPos++;
  if (currentPos > imageMain.length -1 ) {
    currentPos = 0;
  }

  imageMain[currentPos].classList.add('active');
  imageControl[currentPos].classList.add('active');

  // console.log(currentPos);
});



