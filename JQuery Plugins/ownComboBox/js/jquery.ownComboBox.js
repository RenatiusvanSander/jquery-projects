(function($) {
    $.fn.ownComboBox = function(options) {
        return this.each(function() {
            var $this = $( this );

            var settings = $.extend({
                selectOptions: [
                    {
                        selectOption: "empty"
                    }
                ]
            }, options );

            $(".ownComboBoxWrapper").addClass("ownComboBoxWrapper").append('<label for="ownComboBoxSelect">Select:</label><select name="someUniqueName" id="ownComboBoxSelect"></select>');
            
            $.each( options.selectOptions, function(option, itemValue) {
                let text = itemValue.selectOption;
                $this.find("select").append('<option id="' + text +'">' + text + '</option');
            });
        });
    }
})(jQuery);

var $ = jQuery.noConflict();
$( document ).ready(function() {
    console.log( "ready!" );
    $(".ownComboBoxWrapper").ownComboBox({selectOptions: [
        {selectOption: "first Item"},
        {selectOption: "Second option"}
    ]});
});
