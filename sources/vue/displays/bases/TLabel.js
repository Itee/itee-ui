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

export default Vue.component( 'TLabel', {
    template: `
        <label v-if=onClickHandler class="tLabel" :title=tooltip @click=onClickHandler>
            <TIcon v-if='icon' :iconProps="icon" />
            {{label}}
        </label>
        <label v-else class="tLabel" :title=tooltip>
            <TIcon v-if='icon' :iconProps="icon" />
            {{label}}
        </label>
    `,
    props: [ 'label', 'icon', 'tooltip', 'onClickHandler' ]
} )
