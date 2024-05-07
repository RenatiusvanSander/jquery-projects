(function ( $ ) {
 
    $.fn.listBox = function(options) {
        var settings = $.extend({
        }, options );

        var _that = this;

        return this;
    };
}( jQuery ));

$( document ).ready(function() {
     var bar = $( "<div></div>" )
     .appendTo( "body" ).listBox();
});
