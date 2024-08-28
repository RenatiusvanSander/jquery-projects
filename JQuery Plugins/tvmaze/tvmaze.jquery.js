(function($) {

    $.tvmaze = {
           getEpisode: function(showId, callback) {
            var req = $.ajax({
            url:'http://api.tvmaze.com/shows/' + showId + '/episodes'
            });
                      req.done(callBack);
        },
    
        getShow: function(showName, callBack) {
            var req = $.ajax({
                    url:'http://api.tvmaze.com/search/shows/?q=' + showName
              });
    
              req.done(callBack);
       }
    };
    
    })(jQuery);