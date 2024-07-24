$(function() {
  var req = $.ajax({
    "url": "sample.json"
  });
  
  req.done(function(data) {
    console.log(data);
  });

  req.fail(function(arguments){
      console.log('fail', arguments);
   });
  
  req.always(function() {
    console.log('Downloaded');
  });
});