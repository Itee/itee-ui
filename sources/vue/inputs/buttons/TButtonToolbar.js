/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Vue from 'vue'
import {
    TIdFactory,
    TIdFactoryType
}          from '../../../utils/TIdFactory'

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-button-toolbar-' )

export default Vue.component( 'TButtonToolbar', {
    template: `
        <div :class=computeClass role="toolbar">
            <slot></slot>
        </div>
    `,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        },
        justifyContent: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'between', 'around' ].includes( value ) }
        }
    },
    computed: {

        computeClass () {

            let result = 'btn-toolbar'

            const justifyContent = this.justifyContent
            if ( justifyContent ) {
                result += ` justify-content-${justifyContent}`
            }

            return result

        }

    }
} )

