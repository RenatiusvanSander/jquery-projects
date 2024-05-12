(function ( $ ) {
 
    $.fn.listBox = function(options) {
        var settings = $.extend({
        }, options );

        var _that = this;
        _that.settings;

        var element = $("#listBox");
        element.addClass('listBox');

        var ul = $('<ul id="listBox" class="review_bottom"></ul>');
        var input = $('<input type="text" />').appendTo("body").on('keydown', function(event) {
            console.log(event);
        });
        for(i = 0; i < 10; i++) {
            ul.append($('<il id=' + i + '>' + i + '</li>'));
        }
        element.append(ul);

        return this;
    };
}( jQuery ));

$( document ).ready(function() {
     var bar = $.fn.listBox();
});
