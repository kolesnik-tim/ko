import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

//logo
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
  .setTween(TweenMax.to('#box', 1, { top: '5px', width: '65px', height: '60' }))
  .addTo(controller);
