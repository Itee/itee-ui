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

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-container-horizontal-' )

export default Vue.component( 'TContainerHorizontal', {
    template: `<!-- TContainerHorizontal Start -->
        <TContainer
            :id=computeId
            :height=height 
            :width=width 
            orientation="horizontal" 
            :expand=expand 
            :wrapContent=wrapContent 
            :vAlign=vAlign
            :hAlign=hAlign
            :wAlign=wAlign
            :overflow=overflow 
            :overflowX=overflowX 
            :overflowY=overflowY 
        >
            <slot></slot>
        </TContainer>
<!-- TContainerHorizontal End -->`,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        },
        height: {
            type: Number
        },
        width: {
            type: Number
        },
        vAlign: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'stretch', 'baseline' ].includes( value ) }
        },
        hAlign: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'spaced', 'justified' ].includes( value ) }
        },
        wAlign: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'spaced', 'justified', 'stretch' ].includes( value ) }
        },
        expand: {
            type:    Boolean,
            default: false
        },
        wrapContent: {
            type:    Boolean,
            default: false
        },
        overflow: {
            type: String
        },
        overflowX: {
            type: String
        },
        overflowY: {
            type: String
        }
    },
    computed: {
        computeId () {

            if ( this.id ) {
                return this.id
            } else {
                return IdFactory.createId()
            }

        }
    }
} )
