/**
 * Created by Tristan on 09/09/2015.
 */

/* global $ */

function Background ( container, backgroundImage ) {

    var _ = this

    // First check if the given container exist, else throw an error
    if ( container === null || typeof container === 'undefined' || container.length === 0 ) {
        throw new Error( 'Required an container or a template to be create !' )
    }
    _.container = $( container )

    // First check if the given backgroundImage exist, else throw an error
    if ( backgroundImage === null || typeof backgroundImage === 'undefined' || backgroundImage.length === 0 ) {
        throw new Error( 'Required an background image to be create !' )
    } else if ( typeof backgroundImage === 'object' ) {

        _.view = backgroundImage
        _.view.appendTo( _.container )
        _.initEvents()
        _.updateBackground()

    } else if ( typeof backgroundImage === 'string' ) {

        $( '<img/>' ).attr( 'src', backgroundImage ).load( function () {
            _.view = $( this )
            _.view.appendTo( _.container )
            _.initEvents()
            _.updateBackground()
        } )

    } else {
        throw new Error( 'Unexpected type of background image... Please provide jQuery image object or url of the image to set as background !' )
    }

}

Background.getTemplate = function ( url ) {
    return '<!-- Start of Background -->' +
        '<img src="' + url + '" class="stretch-background display-none">' +
        '<!-- End of Background -->'
}

Background.prototype.initEvents = function () {

    var _ = this

    $( window ).resize( function () {
        _.updateBackground()
    } )

}

Background.prototype.updateBackground = function () {

    var _ = this

    var image_width  = ( _.view.width() ) ? _.view.width() : 1
    var image_height = ( _.view.height() ) ? _.view.height() : 1,
        over         = image_width / image_height,
        under        = image_height / image_width,
        body_width   = $( window ).width(),
        body_height  = $( window ).height()

    if ( body_width / body_height >= over ) {
        _.view.css( {
            'width':  body_width + 'px',
            'height': Math.ceil( under * body_width ) + 'px',
            'left':   '0px',
            'top':    Math.abs( ( under * body_width ) - body_height ) / -2 + 'px'
        } )
    } else {
        _.view.css( {
            'width':  Math.ceil( over * body_height ) + 'px',
            'height': body_height + 'px',
            'top':    '0px',
            'left':   Math.abs( ( over * body_height ) - body_width ) / -2 + 'px'
        } )
    }

}
