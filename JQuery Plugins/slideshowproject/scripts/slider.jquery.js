function($) {
  $.fn.slider = function(options) {
    var defaults = {
      duration: 1000
    };
    var settings = $.extend({}, defaults, options);
    
    return this.each(function() {
      var totalImages = $sliderItems.length;
      var currentIndex = 1;
      var $index = $(".index");
      var $slider = $(this);
      var $sliderList = $slider.children("ul");
      var $sliderItems = $sliderList.children("li");
      var $allButtons = $slider.find(".button");
      var $buttons = {
        forward: $allButtons.filter(".forward"),
        back: $allButtons.filter(".back")
      };

      var endMargin = -(($sliderItems.length - 1) * imageWidth);
      var endMargin = ($sliderItems.length - 1) * $sliderItems.first().children("img").width();

      $allButtons.on("click", function(event) {
        var isBackButton = $(this).hasClass("back");
        triggerSlider((isBackButton? "+" : "-"));
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

      var animateSlider = function(direction, callback) {
        $sliderList.stop(true, true).animate({
          "margin-left" : direction + "=" + imageWidth
        }, settings.duration, callback);
      
        var increment = (direction === "+" ? -1 : 1);
        updateIndex(currentIndex + increment);
      };

      var animateSliderToMargin = function(margin, callback) {
        $sliderList.stop(true, true).animate({
          "margin-left": margin
        }, settings.duration, callback);
      };

      var updateIndex = function(newIndex) {
        currentIndex = newIndex;
        $index.text(currentIndex);
      };

      var triggerSlider = function(direction, callback) {
        var isBackButton = (direction === "+");
        if(!isBackButton && isAtEnd()) {
          animateSliderToMargin(0, callback);
          updateIndex(1);
        } else if(isBackButton && isAtBeginning()) {
          animateSliderToMargin(endMargin, callback);
          updateIndex(totalImages);
        } else {
          animateSlider(direction, callback);
        }
      };
    });
  };
}(jQuery);