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
        <div>
            <TIcon v-if="checked === true" class="tCheckicon active" :icon=iconOn v-on:click=_onClick />
            <TIcon v-else class="tCheckicon active" :icon=iconOff v-on:click=_onClick />
            <input ref="checkboxInput" type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)" class="d-none" />
        </div>
    `,
    props:    [ 'id', 'iconOn', 'iconOff', 'checked' ],
    model:    {
        prop:  'checked',
        event: 'change'
    },
    methods:  {

        _onClick ( /*event*/ ) {
            this.$refs.checkboxInput.click()
        }

    }

} )
