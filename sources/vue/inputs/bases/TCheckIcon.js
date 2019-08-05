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

export default Vue.component( 'TCheckIcon', {
    template: `
        <TIcon v-if="value === true" class="tCheckicon active" :iconProps=iconOn v-bind:iconOn="{click: _onClick}" />
        <TIcon v-else class="tCheckicon active" :iconProps=iconOff v-bind:iconOn="{click: _onClick}" />
    `,
    props:   [ 'id', 'value', 'iconOn', 'iconOff', 'onClick' ],
    methods: {

        _onClick ( /*event*/ ) {

            const newValue = !this.value

            this.onClick( newValue )

        }

    }

} )
