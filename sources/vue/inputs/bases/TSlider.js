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

export default Vue.component( 'TSlider', {
    template: `
    <div class="input-group mb-3">

        <div v-if="label" class="input-group-prepend">
            <label class="input-group-text">{{label}}</label>
        </div>
        
        <input type="number" class="form-control" :value=value @change=_onChange>
        
    </div>
    `,
    props:    [ 'id', 'label', 'value', 'onChange' ],
    computed: {},
    methods:  {

        _onChange ( event ) {

            const numericalValue = parseFloat( event.target.value )

            // (One data flow) Required to reset the input field before any parent update
            event.target.value = this.value

            this.onChange( numericalValue )

        }

    }

} )
