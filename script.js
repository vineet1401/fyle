$('.best-features-div').click(function () {
  // Remove 'active' class from all features
  $('.best-features-div').removeClass('active');

  // Add 'active' class to the clicked feature
  $(this).addClass('active');

  // Change the image source
  const newImageSrc = $(this).attr('data-image');
  $('#best-feature-image').attr('src', newImageSrc);
});



// (function ($) {
  // "use strict";

  $('.input').each(function () {
    $(this).on('blur', function () {
      if ($(this).val().trim() != "") {
        $(this).addClass('has-val');
      } else {
        $(this).removeClass('has-val');
      }
    })
  })

// }
// )(jQuery);






// document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    const totalSlides = slides.length;

    // Adjust index for endless scrolling
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    // Move the selected slide to the first position
    carousel.prepend(slides[currentSlide]);

    // Update slide positions
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.order = (i - currentSlide + totalSlides) % totalSlides;
    }

    // Update dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
    slides[currentSlide].classList.add('active');
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  showSlide(currentSlide);

  // Add swipe functionality
  let startX;

  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
      showSlide(currentSlide + 1);
    } else if (startX < endX - 50) {
      showSlide(currentSlide - 1);
    }
  });
// });
