$(document).ready(function () {

  /* For the sticky navigation */
  $('.js--section-sport').waypoint(function (direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: "68px;"
  })

  /********************** Navigation Scroll ****************************/

  /* Scroll to sport on buttons */
  $('.js--scroll-to-sport').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-sport').offset().top - 66
    }, 1000);
  });
  /* Scroll to tour on buttons */
  $('.js--scroll-to-tour').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-tour').offset().top - 66
    }, 1000);
  });
  /* Scroll to roadster on buttons */
  $('.js--scroll-to-roadster').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-roadster').offset().top - 66
    }, 1000);
  });
  /* Scroll to heritage on buttons */
  $('.js--scroll-to-heritage').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-heritage').offset().top - 66
    }, 1000);
  });
  /* Scroll to adventure on buttons */
  $('.js--scroll-to-adventure').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-adventure').offset().top - 66
    }, 1000);
  });
  /* Scroll to urban on buttons */
  $('.js--scroll-to-urban').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-urban').offset().top - 66
    }, 1000);
  });





});
