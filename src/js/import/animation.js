import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

// input:focus + label
$('input[type=number]').focus(function() {
  $(this).next().css({'font-size': '15px', 'transform': 'translate(-50%, 40px)', 'color': '#797979'});
});
$('input[type=number]').blur(function() {
  if($(this).val() === '') {
    $(this).next().css({'font-size': '20px', 'transform': 'translate(-50%)', 'color': '#dbd273' });
  }
});



//logo  scrollmagic
$(window).scroll(function() {
  var scrolled = $(this).scrollTop();
  if( scrolled >= 2 && ! $('.header').hasClass('sticked') ) {
    $('.header').addClass('sticked');
  }    
  if( scrolled <= 2 && $('.header').hasClass('sticked')) {        
    $('.header').removeClass('sticked');
  }
});

//scrollmagic
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene ({
  duration: 150
})
  .setTween(TweenMax.to('#box', 1, { top: '8px', width: '65px', height: '60' }))
  .addTo(controller);
