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

      var endMargin = ($sliderItems.length - 1) * $sliderItems.first().children("img").width();

      $allButtons.on("click", function(event) {
        var isBackButton = $(this).hasClass("back");
        if(!isBackButton && isAtEnd()) {
          animateSliderToMargin(0, 1000);
        } else {
          animateSlider((isBackButton ? "+" : "-"), 1000);
        }
        event.preventDefault();
      });

      var getLeftMargin = function() {
        return parseInt($sliderList.css("margin-left"), 10);
      };
      
      var isAtBeginning = function() {
        return getLeftMargin() === 0;
      };

      var isAtEnd = function() {
        return getLeftMargin() === -endMargin;
      };

      var animateSlider = function(direction, duration, callback) {
        $sliderList.stop(true, true).animate({
          "margin-left" : direction + "=300px"
        }, duration, callback);
      }

      var animateSliderToMargin = function(margin, duration, callback) {
        $sliderList.stop(true, true).animate({
          "margin-left": margin
        }, duration, callback);
      };
    });
  };
}(jQuery);