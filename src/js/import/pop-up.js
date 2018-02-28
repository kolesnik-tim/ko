//pop-up open
$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');
  $(href).addClass('active');
});

//pop-up close
$('.close').on('click', function() {
  $('.pop-up').removeClass('active');
});
