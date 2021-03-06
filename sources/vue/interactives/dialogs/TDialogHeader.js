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

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-dialog-header-' )

export default Vue.component( 'TDialogHeader', {
    template: `
        <div :id="id" class="modal-header">
            <h5 class="modal-title">{{title}}</h5>
            <slot></slot>
            <button v-if="haveCloseButton" type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="$emit('close')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        },
        title: {
            type:    String,
            default: ''
        },
        haveCloseButton: {
            type:    Boolean,
            default: false
        }
    }
} )
