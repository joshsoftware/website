(function(window, document, $) {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('html').toggleClass('no-md-scroll');
  });

  $('html, body').animate({
    //scrollTop: $('#openSource').offset().top
  }, 'slow');

  window.mod = {};

  // $(function() {
  //   window.mod.common = new window.mod.common();
  //
  //   let bodyClasses = $('body').attr('class').split(' ');
  //   $.each(bodyClasses, function(key, val) {
  //     val = val.replace(/[-]/g, '');
  //     if (window.mod[val] !== undefined) {
  //       window.mod[val] = new window.mod[val]();
  //     }
  //   });
  // });

  $('#contact-form').on('submit', function (event) {
    var params = {};
    params.name = $('#input-fname').val();
    params.email = $('#inputEmail').val();
    params.organization = $('#input-organization').val();
    params.job_title = $('#inputcompany').val();
    params.role = $('#exampleFormControlSelect1').val();
    params.message = $('#exampleFormControlTextarea1').val();
    params.phone = $('#inputnumber').val();
    $.post('http://intranet.joshsoftware.com/api/v1/contact_us.json', {contact_us: params, 'g-recaptcha-response': grecaptcha.getResponse}, function(result, status) {
      let form = $('.form-contact');
      form[0].reset();
      alert("Thanks for contacting us! We will get back to you soon!");
    }).fail(function(result){
      alert(result.responseJSON.errors);
    });
    event.preventDefault();
  });

})(window, document, jQuery);

