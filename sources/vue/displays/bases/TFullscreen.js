import Vue from 'vue'

export default Vue.component( 'TFullScreen', {
    template: `<div>Todo: TFullScreen</div>`
} )

//
//
//// This THREEx helper makes it easy to handle the fullscreen API
//// * it hides the prefix for each browser
//// * it hides the little discrepencies of the various vendor API
//// * at the time of this writing (nov 2011) it is available in
////   [firefox nightly](http://blog.pearce.org.nz/2011/11/firefoxs-html-full-screen-api-enabled.html),
////   [webkit nightly](http://peter.sh/2011/01/javascript-full-screen-api-navigation-timing-and-repeating-css-gradients/) and
////   [chrome stable](http://updates.html5rocks.com/2011/10/Let-Your-Content-Do-the-Talking-Fullscreen-API).
//
//'use strict'
//
//const FullScreen = {
//
//    // internal functions to know which fullscreen API implementation is available
//    _hasWebkitFullScreen: 'webkitCancelFullScreen' in document,
//    _hasMozFullScreen:    'mozCancelFullScreen' in document,
//
//    /**
//     * test if it is possible to have fullscreen
//     *
//     * @returns {Boolean} true if fullscreen API is available, false otherwise
//     */
//    available () {
//        return this._hasWebkitFullScreen || this._hasMozFullScreen
//    },
//
//    /**
//     * test if fullscreen is currently activated
//     *
//     * @returns {Boolean} true if fullscreen is currently activated, false otherwise
//     */
//    activated () {
//
//        if ( this._hasWebkitFullScreen ) {
//            return document.webkitIsFullScreen
//        } else if ( this._hasMozFullScreen ) {
//            return document.mozFullScreen
//        } else {
//            return false
//        }
//
//    },
//
//    /**
//     * Request fullscreen on a given element
//     * @param {DomElement} element to make fullscreen. optional. default to document.body
//     */
//    request ( element ) {
//        element = element || document.body
//        if ( this._hasWebkitFullScreen ) {
//            element.webkitRequestFullScreen( Element.ALLOW_KEYBOARD_INPUT )
//        } else if ( this._hasMozFullScreen ) {
//            element.mozRequestFullScreen()
//        } else {
//            throw new Error( 'Unable to request fullscreen mode !!!' )
//        }
//    },
//
//    /**
//     * Cancel fullscreen
//     */
//    cancel () {
//        if ( this._hasWebkitFullScreen ) {
//            document.webkitCancelFullScreen()
//        } else if ( this._hasMozFullScreen ) {
//            document.mozCancelFullScreen()
//        } else {
//            throw new Error( 'Unable to cancel fullscreen mode !!!' )
//        }
//    },
//
//    /**
//     * Bind a key to renderer screenshot
//     * usage: THREEx.FullScreen.bindKey({ charCode : 'a'.charCodeAt(0) });
//     */
//    bindKey ( opts ) {
//
//        opts           = opts || {}
//        const charCode = opts.charCode || 'f'.charCodeAt( 0 )
//        const dblclick = opts.dblclick !== undefined ? opts.dblclick : false
//        const element  = opts.element
//
//        const toggle = () => {
//            if ( FullScreen.activated() ) {
//                FullScreen.cancel()
//            } else {
//                FullScreen.request( element )
//            }
//        }
//
//        const onKeyPress = ( event => {
//            if ( event.which !== charCode ) {
//                return
//            }
//            toggle()
//        } ).bind( this )
//
//        document.addEventListener( 'keypress', onKeyPress, false )
//
//        dblclick && document.addEventListener( 'dblclick', toggle, false )
//
//        return {
//            unbind: () => {
//                document.removeEventListener( 'keypress', onKeyPress, false )
//                dblclick && document.removeEventListener( 'dblclick', toggle, false )
//            }
//        }
//    }
//
//}
