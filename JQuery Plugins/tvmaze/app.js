(function() {
    $('#submitButton').on ('click', getShowName);

      function getShowName(evt){
             evt.proventDefault();
            if($('#showInput')[0].valuie.length > 0){
      let searchValue = $('#showInput')[0].value;
    $().tvmaze.getShow(searchValue, (results) => {
           displayShowResults(results[0].show);
                    });
   }
     }
})();