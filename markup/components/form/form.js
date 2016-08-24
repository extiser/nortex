$('.jsForm .jsFormField').each(function () {
  var thisPlaceholder = $(this).attr('placeholder'),
      thisValue = $(this).val(),
      thisRequired = $(this).data('required');

    if (!thisValue) {
      $(this).before('<div class="form-element-placeholder">'+ thisPlaceholder +'</div>').attr('placeholder', '');
    } else {
      $(this).before('<div class="form-element-placeholder _hide">'+ thisPlaceholder +'</div>').attr('placeholder', '');
    }
    if (thisRequired) {
      $(this).after('<div class="form-element-error _hide">поле обязательно для заполнения</div>');
    }

});

$('.jsFormField').focus(function () {
  var thisValue = $(this).val();

  $(this).next('.form-element-error').addClass('_hide');
  $(this).parent('.form-element').removeClass('_error');

  if (!thisValue) {
    $(this).prev('.form-element-placeholder').addClass('_hide');
  }

  if (!thisValue && $(this).data('type') == 'textarea') {
    $(this).prev('.form-element-placeholder').addClass('_hide');
    $(this).parent('.form-element').addClass('_active');
  }
});

$('.jsFormField').blur(function () {
  var thisValue = $(this).val();

  if (!thisValue) {
    $(this).prev('.form-element-placeholder').removeClass('_hide');
    $(this).next('.form-element-error').removeClass('_hide');
    $(this).parent('.form-element').addClass('_error');
  }

  if (!thisValue && $(this).data('type') == 'textarea') {
    $(this).prev('.form-element-placeholder').removeClass('_hide');
    $(this).parent('.form-element').removeClass('_active');
    $(this).parent('.form-element').removeClass('_error');
  }
});
