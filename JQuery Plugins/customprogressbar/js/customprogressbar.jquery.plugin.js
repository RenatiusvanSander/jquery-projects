(function($){
  $.widget( "ccf.customprogressbar", {
 
    options: {
        value: 0
    },
 
    _create: function() {
        this.element
            .addClass( "progressbar" )
            .progressbar({
                value: 0,
                complete: this._onComplete,
                change: function( event, ui ) { console.log("change internal")}
             })
             .bind( "progressbarcomplete", function( event, data ) {
                alert( "Events bubble and support many handlers for extreme flexibility." );
                alert( "The progress bar value is " + data.value );
            });
        
        this.element.on("click", function() {
            var currentValue = $( this ).progressbar( "option", "value" );
            $(this).progressbar("value", currentValue + 10);
        })
        this.element.on( "progressbarchange", function( event, ui ) { console.log("change done")} );
        
        this.element.find("div.progressbar.ui-progressbar.ui-corner-all.ui-widget.ui-widget-content").attr("id","progresswraper").removeClass("ui-widget-content").addClass("customprogressbar-widget-content");
        this.element.find("div.ui-progressbar-value.ui-corner-left.ui-widget-header").attr("id","progress").removeClass("ui-widget-header").addClass("customprogressbar-widget-header");

        this.refresh();
    },

    _onComplete: function( event, ui ) {
        if(event.type === "progressbarcomplete") {
            console.log("start event")
            console.log(event);
            console.log("run complete");
            $(this).css("display", "none");
            this.refresh();
        }
    },

    _setOption: function( key, value ) {
        if ( key === "value" ) {
            value = this._constrain( value );
        }
        this._super( key, value );
    },

    _constrain: function( value ) {
        if ( value > 100 ) {
            value = 100;
        }
        if ( value < 0 ) {
            value = 0;
        }
        return value;
    },

    _setOptions: function( options ) {
        this._super( options );
        this.refresh();
    },

    refresh: function() {
        if ( this.options.value == 100 ) {
            this._trigger( "complete", null, { value: 100 } );
        }
    },

    _destroy: function() {
        this.element.off("click");
        this.element
            .removeClass( "progressbar" )
    },
});
})(jQuery);

$( "<div></div>" )
    .appendTo( "body" )
    .customprogressbar({ value: 100 });
 
