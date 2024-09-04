function($) {
  $.fn.slider = function(options) {
    var defaults = {};
    var settings = $.extend({}, defaults, options);
    return this.each(function() {
      var $slider = $(this);
      var $sliderList = $slider.children("ul");
      var $sliderItems = $sliderList.children("li");
      var $allButtons = $slider.find(".button");
      var $buttons = {
        forward: $allButtons.filter(".forward"),
        back: $allButtons.filter(".back")
      };
    });
  };
}(jQuery);