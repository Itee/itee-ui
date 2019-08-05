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

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-button-group-' )

export default Vue.component( 'TButtonGroup', {
    template: `
        <div :id=id :class=computeClass role="group">
            <slot v-if="isBlock" style="border: #6f42c1 2px solid;">block</slot>
            <slot v-else >notblock</slot>
        </div>
    `,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        },
        size: {
            type:      String,
            validator: ( value ) => { return [ 'sm', 'lg' ].includes( value ) }
        },
        isVertical: {
            type:    Boolean,
            default: false
        },
        isBlock: {
            type:    Boolean,
            default: false
        }
    },
    computed: {

        computeClass () {

            const isVertical = this.isVertical
            let result       = ( isVertical ) ? 'btn-group-vertical' : 'btn-group'

            const size = this.size
            if ( size ) {
                result += ` btn-group-${size}`
            }

            const isBlock = this.isBlock
            if ( isBlock ) {
                result += ' d-flex'
            }

            return result

        }

    }
} )

