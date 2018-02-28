
import './lib/maskedinput';
import rangeslider from 'rangeslider.js';
// import ScrollMagic from 'scrollmagic';

//range
// $('input[type="range"]').rangeslider({
//   onSlide: function(position, value) {
//     $('.coins__res').text(value);
//   }
// });

const cssClasses = [
  'rangeslider--is-lowest-value',
  'rangeslider--is-highest-value'
];
  
$('input[type=range]').rangeslider({
  polyfill: false,
  onSlide: function(position, value) {
    $('.coins__res').text(value);
  }
});



//калькулятор
let coins = $('.coins');
let credit = $('.credit');
let percent = $('.percent');
let sum = $('.sum');

coins.change(function() {
  computation();
  $('.coins__res').text(coins.val() + 'P');
});
credit.change(function() {
  computation();
  $('.credit__res').text(credit.val() + 'лет');
  console.log(+credit.val());
});
percent.change(function() {
  computation();
  $('.percent__res').text(+percent.val() + '%');
});

function computation() {
  let res = Math.pow(percent.val(), credit.val());
  let division = (percent.val() * res)/(res - 1);
  let amount = coins.val() * division;
  sum.text(res);
}


//pop-up


//menu
$('.icon-menu-icon').on('click', function() {
  $('.menu').addClass('active');
});
// pop-up 1
$('.btn--bid-1').on('click', function() {
  $('.bid-1').addClass('active');
});
//pop-up 2
$('.btn--bid-2').on('click', function() {
  $('.bid-2').addClass('active');
});
// pop-up 3
$('.btn--consultant').on('click', function() {
  $('.consultant').addClass('active');
});
//pop-up close
$('.close').on('click', function() {
  $('.pop-up').removeClass('active');
});


//mask
jQuery(function($) {
  $('input[type="tel"]').mask('+7(699) 999-9999');
});




//logo
$(window).scroll(function() {
  var scrolled = $(this).scrollTop();
  if( scrolled >= 10 && ! $('.header').hasClass('sticked') ) {
    $('.header').addClass('sticked');
  }    
  if( scrolled <= 10 && $('.header').hasClass('sticked')) {        
    $('.header').removeClass('sticked');
  }
});




// var controller = new ScrollMagic.Controller();

// // create a scene
// new ScrollMagic.Scene({
//   duration: 100,
//   offset: 50
// })
//   .setPin('#my-sticky-element')
//   .setTween(tween)
//   .addTo(controller);
