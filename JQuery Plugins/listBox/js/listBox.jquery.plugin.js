(function ( $ ) {
    $.fn.listBox = function(options) {
        var opts = $.extend({
        }, options );

        var _that = this;

        var createMarkup = function() {
            var ul = $('<ul id="listBoxUl" class="review_bottom"></ul>');
            element.append(ul);
            for(i = 0; i < 10; i++) {
                ul.append($('<il id=' + i + '>' + i + '</li>'));
            }
        };

        var handleKeyDown = function(event) {
            console.log(event);
    
            if(event.originalEvent.keyCode === 40 && event.originalEvent.altKey === true) {
                element.show();
            }

            if(event.originalEvent.keyCode === 27) {
                if(element.is(':visible')) {
                    element.hide();
                }

                if(element.not(':visible')) {
                    input.val('');
                }
            }

            if(event.originalEvent.keyCode === 40 && event.originalEvent.altKey === false) {
                if(element.is(':visible') && input.val().length == 0) {
                    
                }

                if(element.not(':visible') && input.val().length > 0) {

                }
            }
        };
    
        var toggleVisibility = function() {
            element.toggle();
        };

        var input = $('<input type="text" />').insertBefore('#listBox'); 
        var element = $('#listBox').addClass('listBox');
        createMarkup();
        input.on('keydown', handleKeyDown);

        return this;
    };
}( jQuery ));

$( document ).ready(function() {
     var bar = $.fn.listBox();
});
