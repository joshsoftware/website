(function(window, document, $) {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('html').toggleClass('no-md-scroll');
  });

  $('html, body').animate({
    scrollTop: $('#openSource').offset().top
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

})(window, document, jQuery);
