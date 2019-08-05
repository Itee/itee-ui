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

export default Vue.component( 'TInputRange', {
    template: `
    <div class="input-group mb-3">

        <div v-if="label" class="input-group-prepend">
            <label class="input-group-text">{{label}}</label>
        </div>
        
        <div class="form-control">
            <input class="form-control" style="padding: 0; height: 24px;" type="range" :min=min :max=max :step=step :value=value @change=_onChange>
        </div>
       
        <div class="input-group-append">
            <label class="input-group-text">{{value}}</label>
        </div>
        
    </div>
    `,
    props:    [ 'label', 'min', 'max', 'step', 'value', 'onChange' ],
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
