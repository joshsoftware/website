(function(window, document, $) {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('html').toggleClass('no-md-scroll');
  });

  // $('html, body').animate({
  //   scrollTop: $('#openSource').offset().top
  // }, 'slow');

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

  function scrollerInit() {
    $('#skrollr-body').ready(function() {
      skrollr.init({
        smoothScrolling: true,
        //mobileDeceleration: 0.004
      });
    });
  }

  $(document).on('scroll', onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function() {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  });

  function onScroll(event) {}

  $(function() {
    scrollerInit();
  });

})(window, document, jQuery);
