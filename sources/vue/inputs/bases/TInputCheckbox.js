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

export default Vue.component( 'TInputCheckbox', {
    template: `
        <div class="btn-group-toggle btn-block" data-toggle="buttons">
            <label v-if="value === true" class="btn btn-primary btn-block active" @click=_onClick>
                <TIcon :iconProps=iconOn v-bind:iconOn="{click: _onClick}" /> {{label}}
            </label>
            <label v-else class="btn btn-secondary btn-block" @click=_onClick>
                <TIcon :iconProps=iconOff v-bind:iconOn="{click: _onClick}" /> {{label}}
            </label>
        </div>
    `,
    props:   [ 'id', 'label', 'value', 'iconOn', 'iconOff', 'onChange' ],
    methods: {

        _onClick ( /*event*/ ) {

            const newValue = !this.value

            this.onChange( newValue )

        }

    }

} )
