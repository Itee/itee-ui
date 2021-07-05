/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isDefined }                from 'itee-validators'
//import { isDefined }                from 'itee-validators/sources/cores/voids/isDefined'
import Vue                          from 'vue'
import { DefaultLogger as TLogger } from 'itee-core'
import {
    TIdFactory,
    TIdFactoryType
}                                   from '../../../utils/TIdFactory'

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-button-' )

export default Vue.component( 'TButton', {
    template: `
        <button :id=computeId :class=computeClass type="button" :disabled="isDisabled" :aria-pressed="isActive" :aria-disabled="isDisabled" v-on:click="$emit('click')">
            <span v-for="decorator in preDecorators">
                <TIcon v-if="decorator.type === 'icon'" :icon='decorator.icon' />
                <label v-else>Error: Unknown/unallowed decorator of type "{{decorator.type}}" !!!</label>
            </span>
            <slot></slot>{{label}}
            <span v-for="decorator in postDecorators">
                <TIcon v-if="decorator.type === 'icon'" :icon='decorator.icon' />
                <label v-else>Error: Unknown/unallowed decorator of type "{{decorator.type}}" !!!</label>
            </span>
        </button>
    `,
    props: {
        id: {
            type: String
        },
        label: {
            type:    String,
            default: ''
        },
        decorators: Array,
        size:       {
            type:      String,
            validator: ( value ) => { return [ 'sm', 'lg' ].includes( value ) }
        },
        type: {
            type:      String,
            validator: ( value ) => { return [ 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link' ].includes( value ) }
        },
        isOutlined: {
            type:    Boolean,
            default: false
        },
        isBlock: {
            type:    Boolean,
            default: false
        },
        isActive: {
            type:    Boolean,
            default: false
        },
        isDisabled: {
            type:    Boolean,
            default: false
        }

    },
    computed: {

        computeId () {

            if ( this.id ) {
                return this.id
            } else {
                return IdFactory.createId()
            }

        },

        computeClass () {

            const type       = this.type
            const size       = this.size
            const isOutlined = this.isOutlined
            const isBlock    = this.isBlock
            const isActive   = this.isActive
            const isDisabled = this.isDisabled
            let result       = 'btn'

            // Compute button type and outline
            if ( type ) {

                if ( isOutlined ) {

                    if ( type === 'link' ) { TLogger.warn( 'TButton: button type link cannot be outlined !' ) }

                    result += ` btn-outline-${type}`

                } else {
                    result += ` btn-${type}`
                }

            }

            // Compute button size
            if ( size ) {

                result += ` btn-${size}`

            }

            // Compute block property
            if ( isBlock ) {

                result += ` btn-block`

            }

            // Compute active property
            if ( isActive === true ) {

                if ( isDisabled === true ) { TLogger.warn( `TButton: Button is active but marked as disabled.` ) }

                result += ` active`

            }

            return result

        },

        preDecorators () {

            return ( isDefined( this.decorators ) ) ? this.decorators.filter( ( decorator ) => {

                return ( decorator.position === undefined || decorator.position === 'pre' ) && ( decorator.display === undefined || decorator.display === true )

            } ) : []

        },

        postDecorators () {

            return ( isDefined( this.decorators ) ) ? this.decorators.filter( ( decorator ) => {

                return decorator.position === 'post' && ( decorator.display === undefined || decorator.display === true )

            } ) : []

        }

    }
} )

