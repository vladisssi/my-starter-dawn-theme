document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.product__slider-slide');
  const prevButton = document.querySelector('.slider-arrow--prev');
  const nextButton = document.querySelector('.slider-arrow--next');
  const dotsContainer = document.querySelector('.slider__dots');

  if (!slides.length || !prevButton || !nextButton || !dotsContainer) return;

  let currentSlide = 0;
  const dots = [];

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('slider__dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});
