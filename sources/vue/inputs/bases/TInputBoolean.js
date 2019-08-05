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

export default Vue.component( 'TInputBoolean', {
    template: `
    <div class="input-group mb-3">

        <div class="btn-group-toggle btn-block" data-toggle="buttons">
            <label v-if="value === true" class="btn btn-primary btn-block active">
                <input type="checkbox" checked autocomplete="off" v-on:click="_onClick"> {{label}}
            </label>
            <label v-else class="btn btn-secondary btn-block">
                <input type="checkbox" autocomplete="off" v-on:click="_onClick"> {{label}}
            </label>
        </div>
        
    </div>
    `,
    props:   [ 'id', 'label', 'value', 'onChange' ],
    methods: {

        _onClick ( /*event*/ ) {

            const newValue = !this.value

            this.onChange( newValue )

        }

    }

} )
