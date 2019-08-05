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
} from '../../../utils/TIdFactory'

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-dialog-' )

export default Vue.component( 'TDialog', {
    template: `
        <div ref="bgModal" :id="id" :class=computeClass :style=computeStyle tabindex="-1" role="dialog" v-on:click="$emit('close')" >
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div v-on:click.stop class="modal-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    `,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        },
        isVisible: {
            type:    Boolean,
            default: false
        }
    },
    computed: {

        computeClass () {

            return ( this.isVisible ) ? 'modal fade show' : 'modal fade'

        },

        computeStyle () {

            return {
                display: ( this.isVisible ) ? 'block' : 'none'
            }

        }

    },
    mounted () {

        this.$el.addEventListener( 'wheel', this.handleWheel, true )
        this.$el.addEventListener( 'mousewheel', this.handleWheel, true )

    },
    destroyed () {

        this.$el.removeEventListener( 'wheel', this.handleWheel, true )
        this.$el.removeEventListener( 'mousewheel', this.handleWheel, true )

    },
    methods: {

        handleWheel ( wheelEvent ) {
            wheelEvent.preventDefault()
            wheelEvent.stopPropagation()
        }

    }

} )
