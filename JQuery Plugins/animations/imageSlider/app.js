$(function() {
    var sliderWrapper = $("#slider");
    var sliderList = sliderWrapper.children("ul");
    var sliderItems = sliderList.children("li");
    var buttons = sliderWrapper.children(".button");

    var animateSlider = function(direction, duration) {
      sliderList.animate({
        "margin-left" : direction + "=300px"
      }, duration);
    };

    var isAtEnd = function() {
      var imageWidth = sliderItems.first().width();
      var imageCount = sliderItems.length;
      var maxMargin = -1 * (imageWidth * (imageCount-1));
      return parseInt(sliderList.css("margin-left"), 10) === maxMargin;
    }

    buttons.on("click", function() {
        var $this = $(this);
        var isBackBtn = $this.hasClass("back");
        if( (isBackBtn && isAtStart()) || (!isBackBtn && isAtEnd()) ) { return; }
        animateSlider(( isBackBtn ? "+" : "-"), 1000);
      });
  });