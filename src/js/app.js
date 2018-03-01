import './lib/maskedinput';
import './import/animation';
import './import/pop-up';
import './import/calculator';
import './import/parallax';

//WOW
new WOW().init();

//mask
jQuery(function($) {
  $('input[type="tel"]').mask('+7(699) 999-9999');
});

