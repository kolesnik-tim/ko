import rangeslider from 'rangeslider.js';
import numeral from 'numeral';

//Формат

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
    $(curr).closest('.calculator__block__range').find('.range__value b').text(numeral(Math.floor(value)).format('0, 0'));
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

  payment.text(numeral(Math.floor( result )).format('0, 0'));
}

