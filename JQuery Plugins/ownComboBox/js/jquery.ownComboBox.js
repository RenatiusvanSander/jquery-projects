(function($) {
    $.fn.ownComboBox = function() {
        return this.each(function() {
            var $this = $( this );

            $(".ownComboBoxWrapper").addClass("ownComboBoxWrapper").append('<label for="ownComboBoxSelect">Select:</label><select name="someUniqueName" id="ownComboBoxSelect"></select>')
        });
    }
})(jQuery);

var $ = jQuery.noConflict();
$( document ).ready(function() {
    console.log( "ready!" );
    $(".ownComboBoxWrapper").ownComboBox();
});
