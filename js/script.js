// CAROUSEL

const imageMain = document.getElementsByClassName('carousel__main__image');
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
});