'use strict';

(function (window, document, $) {
  'use strict';

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
'use strict';

// Common
window.mod.common = function () {

  // Scope
  var that = this;

  var init = function init() {
    console.log('[brz] begin common.js');
  };

  init();
};