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

export default Vue.component( 'TInputFile', {
    template: `
        <div class="input-group mb-3">
        
            <div v-if="label" class="input-group-prepend">
                <label class="input-group-text">{{label}}</label>
            </div>
            
            <div class="custom-file">
                <input class="custom-file-input" type="file" name="files[]" multiple v-on:change=_onChange>
                <label class="custom-file-label" style="overflow: hidden;">{{_computePlaceholder}}</label>
            </div>
            
        </div>
    `,
    data: function () {
        return {
            filesNames: undefined
        }
    },
    props:    [ 'label', 'placeholder', 'onChange' ],
    computed: {

        _computePlaceholder () {

            return ( this.filesNames ) ? this.filesNames.toString() : this.placeholder

        }

    },
    methods: {

        _onChange ( event ) {

            const files = event.target.files

            // Update local state
            const filesNames = Array.from( files ).map( file => file.name )
            this.filesNames  = ( filesNames.length > 0 ) ? filesNames : undefined

            this.onChange( files )

        }

    }

} )
