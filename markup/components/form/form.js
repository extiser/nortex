jQuery.fn.jsField = function() {

  return this.each(function() {
    var $this = $(this),
        thisValue = $this.val(),
        thisPlaceholder = $this.attr('placeholder');


    if (!thisValue) {
      $this.before('<div class="form-element-placeholder">'+ thisPlaceholder +'</div>').attr('placeholder', '');
    } else {
      $this.before('<div class="form-element-placeholder _hide">'+ thisPlaceholder +'</div>').attr('placeholder', '');
    }

    $this.focus( function () {
      if (!thisValue) {
        $this.prev('.form-element-placeholder').addClass('_hide');
        $this.next('.form-element-error').addClass('_hide');
        $this.parent('.form-element').removeClass('_error');
      }
    });

    $this.blur( function () {
      if (!$this.val()) {
        $this.prev('.form-element-placeholder').removeClass('_hide');
      }
    });
  });

};

$('.jsFormField').jsField();


(function () {
  jQuery.fn.jsValidate= function() {      
      $this = $(this);
      $indexEl = [];

      $this.each(function (index, el) {
        if (el.required && !el.value) {
          $indexEl.push(index);
        }
      });

      if ($indexEl.length == 2) {
        $this.parent('.form-element').addClass('_error').find('.form-element-error').removeClass('_hide');
      } else if ($indexEl.length == 1) {
        $($this[$indexEl[0]]).parent('.form-element').addClass('_error').find('.form-element-error').removeClass('_hide');
      } else if ($indexEl.length == 0) {
        ajax();
      }
  };
})();



$('.jsForm').submit(function () {
  $('.jsFormField').jsValidate();
});


function ajax() {
  var msg = $(".jsForm").serialize();
  $.ajax({
    type: "POST",
    url: "./send.php",
    data: msg,
    success: function(data) {
      $('.contact-block-form').addClass('_hide');
      $('.contact-block-thanks').removeClass('_hide');
    },
    error:  function(xhr, str){
      alert("Возникла ошибка!");
    }
  });
}

