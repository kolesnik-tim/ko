import './lib/maskedinput';
import './import/animation';
import './import/pop-up';
import './import/calculator';

//mask
jQuery(function($) {
  $('input[type="tel"]').mask('+7(699) 999-9999');
});

