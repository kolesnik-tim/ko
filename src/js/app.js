// import sayHello from './lib/sayHello.js';
import mask from 'jquery.maskedinput';
import jquery from 'jquery';
import rangeslider from 'rangeslider.js';




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

// //mask
// jQuery(function($) {
//   $('#phone-1').mask('(999) 999-9999');
// });

//range
$('input[type="range"]').rangeslider();
