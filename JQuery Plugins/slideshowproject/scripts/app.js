$(function() {
    $(".slider").slider();
});

$(document.documentElement).on("keyup", function(event) {
    if(event.keyCode === 37) {
      triggerSlider("+");
    } else if (event.keyCode === 39) {
      triggerSlider("-");
    }
  });