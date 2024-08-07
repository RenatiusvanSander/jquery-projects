(function($) {
    $.fn.logAttr = function(attr, backup, useAlert) {
      return this.each(function() {
        if(useAlert) {
          alert($(this).attr(attr) || backup);
        } else {
          console.log($(this).attr(attr) || backup);
        }
      });
    };
  })(jQuery);