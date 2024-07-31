var definePlugin = function() {
    var $ = jQuery;
    $.fn.logId = function() {
      return this.each(function() {
        console.log(this.id);
      });
    };
  };
  
  definePlugin();