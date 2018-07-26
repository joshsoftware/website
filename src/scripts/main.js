(function(window, document, $) {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('html').toggleClass('no-md-scroll');
  });

})(window, document, jQuery);

