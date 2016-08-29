$('.jsHeaderMenu').click(function () {
  $(this).toggleClass('_active');
  $('.jsMenuList').toggleClass('_active');
  $('.section').toggleClass('_blur');
});