$(function() {
    $("a").on("click", function(event) {
      event.preventDefault();
      $("div").css("background", "blue");
    });
  });