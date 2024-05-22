(function ( $ ) {
    $.fn.listBox = function(options) {
        var opts = $.extend({
        }, options );

        var _that = this;

        var createMarkup = function() {
            var ul = $('<ul id="listBoxUl" class="tooltiptext"></ul>');
            element.append(input);
            element.append(ul);
            for(i = 0; i < 10; i++) {
                ul.append($('<il id=' + i + '>' + i + '</li>'));
            }
        };

        var handleKeyDown = function(event) {
            console.log(event);

            if(event.originalEvent.keyCode === 13) {
                if(element.find('#listBoxUl').is(':visible')) {
                    element.find('listBoxUl').hide();
                }
            }
    
            if(event.originalEvent.keyCode === 40 && event.originalEvent.altKey === true) {
                element.find('listBoxUl').show();
            }

            if(event.originalEvent.keyCode === 27) {
                if(element.find('listBoxUl').is(':visible')) {
                    element.find('listBoxUl').hide();
                }

                if(element.find('listBoxUl').not(':visible')) {
                    input.val('');
                }
            }

            if(event.originalEvent.keyCode === 40 && event.originalEvent.altKey === false) {
                if(element.find('listBoxUl').is(':visible') && input.val().length === 0) {
                    
                }

                if(element.find('listBoxUl').not(':visible') && input.val().length === 0) {
                    var list = element.find('#listBoxUl');
                    $(list).css('visibility','visible');
                    var child = list.children()[0];

                    child.focus({focusVisible: true});
                    $(child).css('background-color','white');
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
