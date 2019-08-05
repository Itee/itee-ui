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

export default Vue.component( 'TDialogBody', {
    template: `
        <div :id="id" class="modal-body">
            <slot></slot>                      
        </div>
    `,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        }
    }
} )
