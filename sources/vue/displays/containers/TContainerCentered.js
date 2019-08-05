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

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-container-centered-' )

export default Vue.component( 'TContainerCentered', {
    template: `<!-- TContainerCentered Start -->
        <TContainer 
            :id=computeId
            class="tContainer tContainerCentered" 
            :height=height 
            :width=width 
            :orientation=orientation 
            :expand=expand 
            :wrapContent=true 
            vAlign="center" 
            hAlign="center" 
            wAlign="center" 
            :overflow=overflow 
            :overflowX=overflowX 
            :overflowY=overflowY 
        >
            <slot></slot>
        </TContainer>
<!-- TContainerCentered End -->`,
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
        orientation: {
            type:    String,
            default: ''
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
