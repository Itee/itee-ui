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

export default Vue.component( 'TContent', {
    template: `
        <TContainerStretched class="tContent" orientation="horizontal" :expand=true :wrapContent=true>
            <slot></slot>
        </TContainerStretched>
    `
} )
