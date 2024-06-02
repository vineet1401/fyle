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






// For Carousel
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




// for navbar
window.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Add click event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Remove active class from all navigation items
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      
      // Add active class to the clicked navigation item
      link.classList.add('active');
    });
  });
});

window.addEventListener('scroll', function() {
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  // Calculate viewport height
  const windowHeight = window.innerHeight;
  
  // Get the top of the viewport
  const viewportTop = window.scrollY;
  
  // Initialize variables to track closest section and its distance from the top
  let closestSectionDistance = Number.POSITIVE_INFINITY;
  let closestSectionId = null;
  
  // Loop through each section
  sections.forEach(section => {
    // Get section bounding rect
    const rect = section.getBoundingClientRect();
    
    // Check if section is in viewport
    if (rect.bottom <= windowHeight) {
      // Calculate distance from section to top of viewport
      const distanceToTop = Math.abs(rect.top);
      
      // Update closest section if closer than the previous closest
      if (distanceToTop < closestSectionDistance) {
        closestSectionDistance = distanceToTop;
        closestSectionId = section.id;
      }
    }
  });
  
  // If no section is fully visible, set closest section as active
  if (closestSectionId) {
    // Remove active class from all navigation items
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to the navigation item corresponding to the closest section
    const activeNavLink = document.querySelector(`a[href="#${closestSectionId}"]`);
    if (activeNavLink) {
      activeNavLink.classList.add('active');
    }
  }
});