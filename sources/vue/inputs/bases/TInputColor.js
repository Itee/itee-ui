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

export default Vue.component( 'TInputColor', {
    template: `
        <div class="input-group mb-3">
        
            <div v-if="label" class="input-group-prepend">
                <label class="input-group-text">{{label}}</label>
            </div>
        
            <input type="text" class="form-control" :value=value @change=_inputTextOnChange />
        
            <div class="input-group-append">
            
                <div class="input-group-text">
                    <input type="color" class="form-control" :value=value @change=_inputColorOnChange />
                </div>
                
            </div>
                
        </div>
    `,
    props:   [ 'label', 'value', 'onChange' ],
    methods: {

        _inputColorOnChange ( event ) {

            const color = event.target.value

            // (One data flow) Required to reset the input field before any parent update
            event.target.value = '#000000' //this.value

            this.onChange( color )

        },

        _inputTextOnChange ( event ) {

            const color = event.target.value

            // (One data flow) Required to reset the input field before any parent update
            event.target.value = '#000000' //this.value

            this.onChange( color )

        }

    },
    created () {

        // value could be of differents types
        // we will need to use a standardized color in internal

        this.color = this.value

    }

} )
