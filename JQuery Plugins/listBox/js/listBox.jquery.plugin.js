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
        var positionIndex = 0;

        var handleKeyDown = function(event) {

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
                if(element[0].children[1].hasAttribute('style') && input.val().length === 0) {
                    $(listBoxChildren[positionIndex]).removeClass('focus-visible');
                    $(listBoxChildren[positionIndex]).blur();

                    positionIndex = positionIndex < 9 ? positionIndex + 1 : 0;
                    listBoxChildren[positionIndex].focus({focusVisible: true});
                    $(listBoxChildren[positionIndex]).addClass('focus-visible');
                } else {
                    var list = element.find('#listBoxUl');
                    $(list).css('visibility','visible');
                    $(list).css('width','40px');
                    $(list).css('height','80px');

                    listBoxChildren[positionIndex].focus({focusVisible: true});
                    $(listBoxChildren[positionIndex]).addClass('focus-visible');
                }
            }
        };
    
        var toggleVisibility = function() {
            element.toggle();
        };

        var input = $('<input type="text" />').insertBefore('#listBox'); 
        var element = $('#listBox').addClass('listBox');
        createMarkup();
        var listBoxChildren = $('#listBoxUl').children();
        input.on('keydown', handleKeyDown);

        return this;
    };
}( jQuery ));

$( document ).ready(function() {
     var bar = $.fn.listBox();
});
