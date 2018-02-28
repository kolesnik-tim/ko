import rangeslider from 'rangeslider.js';
import accounting from '../import/format';


//калькулятор
const cssClasses = [
  'rangeslider--is-lowest-value',
  'rangeslider--is-highest-value'
];


$('input[type=range]').rangeslider({
  polyfill: false,
  onSlide: function(position, value) {
    let curr = $(this)[0].$element[0];
    value = checkTime(curr, value);
    $(curr).closest('.calculator__block__range').find('.range__value b').text(accounting.formatNumber(Math.floor(value), 0, ' '));
    computation();
  }
});

function checkTime(curr, value) {
  let term = $('.term__res i');
  if ($(curr).is('.term')) {
    if (value > 11) {
      value = value / 12;
      if (value >= 1 && value < 2) {
        term.text('год');
      } else if(value >= 2 && value < 5) {
        term.text('года');
      } else if(value >= 21 && value < 22) {
        term.text('год');
      } else if(value >= 22 && value < 25) {
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

function computation() {
  let sum = parseInt($('.sum').val());
  let term = parseInt($('.term').val());
  let percent = parseInt($('.percent').val()) / 12 / 100;
  let payment = $('.payment');

  let a = percent * Math.pow((1+percent), term);
  let b = Math.pow((1+percent), term) - 1;
  let result = sum * (a/b);

  payment.text(accounting.formatNumber(Math.floor(result), 0, ' '));
}
