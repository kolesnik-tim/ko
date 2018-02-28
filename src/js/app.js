import './lib/maskedinput';
import rangeslider from 'rangeslider.js';
// import ScrollMagic from 'scrollmagic';

const cssClasses = [
  'rangeslider--is-lowest-value',
  'rangeslider--is-highest-value'
];

//калькулятор
$('input[type=range]').rangeslider({
  polyfill: false,
  onSlide: function(position, value) {
    let curr = $(this)[0].$element[0];
    value = checkTime(curr, value);
    $(curr).closest('.calculator__block__range').find('.range__value b').text(Math.floor(value));
    computation();
  }
});

function checkTime(curr, value) {
  let term = $('.term__res i');
  if ($(curr).is('.term')) {
    if (value > 11) {
      value = value / 12;
      console.log(value);
      if (value >= 1 && value < 2) {
        term.text('год');
      } else if(value >= 2 && value < 5) {
        term.text('года');
      } else{
        term.text('лет');
      }
      
    } else{
      term.text('месяцев');
    }
  }
  return value;
}

// coins.change(function() {
//   computation();
//   $('.coins__res').text(coins.val());
// });
// credit.change(function() {
//   computation();
//   $('.credit__res').text(credit.val());
//   console.log(+credit.val());
// });
// percent.change(function() {
//   computation();
//   $('.percent__res').text(+percent.val(), '%');
// });

function computation() {
  let sum = parseInt($('.sum').val());
  let term = parseInt($('.term').val());
  let percent = parseInt($('.percent').val()) / 12 / 100;
  let payment = $('.payment');

  let a = percent * Math.pow((1+percent), term);
  let b = Math.pow((1+percent), term) - 1;
  let result = sum * (a/b);

  payment.text(Math.floor( result ));
}


//pop-up
$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');
  $(href).addClass('active');
});

//pop-up close
$('.close').on('click', function() {
  $('.pop-up').removeClass('active');
});


// // menu
// $('.icon-menu-icon').on('click', function() {
//   $('.menu').addClass('active');
// });
// // pop-up 1
// $('.btn--bid-1').on('click', function() {
//   $('.bid-1').addClass('active');
// });
// //pop-up 2
// $('.btn--bid-2').on('click', function() {
//   $('.bid-2').addClass('active');
// });
// // pop-up 3
// $('.btn--consultant').on('click', function() {
//   $('.consultant').addClass('active');
// });
// //pop-up close
// $('.close').on('click', function() {
//   $('.pop-up').removeClass('active');
// });


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
