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

export default Vue.component( 'TMenu', {
    template: `
        <TContainer class="tMenu" vAlign="center" hAlign="center">
            <slot></slot>
        </TContainer>
    `
} )
