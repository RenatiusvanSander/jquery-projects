$(function() {
    $(".slider").slider();
});

$(document.documentElement).on("keyup", function(event) {
  if(event.keyCode === 37) {
    resetTimer();
    triggerSlider("+");
  } else if (event.keyCode === 39) {
    resetTimer();
    triggerSlider("-");
  }
});