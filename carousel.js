const carouselContainer = document.querySelector('.carousel_inner')
const prevButton = document.querySelector('.carousel button.prev_btn');
const nextButton = document.querySelector('.carousel button.next_btn');
const slides = document.querySelectorAll('.carousel .item')

console.log('Gallery')

const totalSlides = slides.length
let currentIndex = 0;
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
    updateButtons();
}

updateButtons();

function nextSlide() {
    showSlide(currentIndex + 1);
    console.log(currentIndex)
}


function updateButtons() {
  // Hide previous button on the first slide
  if (currentIndex === 0) {
    prevButton.style.visibility = "hidden";
  } else {
    prevButton.style.visibility = "visible";
  }

  // Hide next button on the last slide
  if (currentIndex === totalSlides - 1) {
    nextButton.style.visibility = "hidden";
  } else {
    nextButton.style.visibility = "visible";
  }
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

prevButton.addEventListener('click', prevSlide)
nextButton.addEventListener('click', nextSlide)

let autoPlayInterval = setInterval(nextSlide, 5000);

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carousel.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(nextSlide, 5000);
});

