//pop-up open
// $('[data-pop]').on('click', function() {
//   let href = $(this).attr('href');
//   $(href).addClass('active');
// });

// //pop-up close
// $('.close').on('click', function() {
//   $('.pop-up').removeClass('active');
// });



//pop-up open
$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');
  $('.menu-open').toggleClass('active');
  if($('.menu-open').hasClass('active')) {
    $(href).addClass('active');
    $('.pop-up li').addClass('fadeInUp');
  } else{
    $('.pop-up').removeClass('active');
    $('.pop-up li').removeClass('fadeInUp');
  }
});

//якарь
$('.header__block--menu, #menu').on('click', 'a', function(event) {
  event.preventDefault();
  $('#menu').removeClass('active');
  $('.pop-up li').removeClass('fadeInUp');
  $('.menu-open').removeClass('active');
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
