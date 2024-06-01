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
