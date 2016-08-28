$('.jsFlipperTrigger').click(function (e) {
  e.preventDefault();
  $('.jsFlipperContainer').toggleClass('_hover');
  $('.contact-block-form').removeClass('_hide');
  $('.contact-block-thanks').addClass('_hide');
})