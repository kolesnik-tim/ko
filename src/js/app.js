import Jquery from 'jquery';
import './lib/maskedinput';
import rangeslider from 'rangeslider.js';
import ScrollMagic from 'scrollmagic';





//pop-up
$('.icon-menu-icon').on('click', function() {
  $('.menu').addClass('active');
});
$('.btn--bid-1').on('click', function() {
  $('.bid-1').addClass('active');
});
$('.btn--bid-2').on('click', function() {
  $('.bid-2').addClass('active');
});
$('.btn--consultant').on('click', function() {
  $('.consultant').addClass('active');
});

$('.close').on('click', function() {
  $('.pop-up').removeClass('active');
});

//mask
jQuery(function($) {
  $('input[type="tel"]').mask('+7(699) 999-9999');
});

//range
$('input[type="range"]').rangeslider();



var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  duration: 100,
  offset: 50
})
  .setPin('#my-sticky-element')
  .setTween(tween)
  .addTo(controller);
