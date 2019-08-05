/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { isObject }        from 'itee-validators'
//import { isObject }        from 'itee-validators/sources/cores/objects/isObject'
import Vue                 from 'vue'

// Todo: implement router facility here using target instead of clickHandler !

export default Vue.component( 'TIcon', {

    render: function ( createElement ) {

        let dataObject = {
            class:       this.iconClass,
            style:       this.iconStyle,
            attrs:       this.iconAttrs,
            props:       ( isObject( this.iconProps ) ) ? this.iconProps : { icon: this.iconProps },
            domProps:    this.iconDomProps,
            on:          this.iconOn,
            nativeOn:    this.iconNativeOn,
            directives:  this.iconDirectives,
            scopedSlots: this.iconScopedSlots,
            slot:        this.iconSlot,
            key:         this.iconKey,
            ref:         this.iconRef
        }

        return createElement(
            'font-awesome-icon',
            dataObject
        )

    },

    props: [ 'iconClass', 'iconStyle', 'iconAttrs', 'iconProps', 'iconDomProps', 'iconOn', 'iconNativeOn', 'iconDirectives', 'iconScopedSlots', 'iconSlot', 'iconKey', 'iconRef' ],

    components: {
        FontAwesomeIcon
    }

} )
