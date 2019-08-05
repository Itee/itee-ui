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

export default Vue.component( 'TInputArray', {
    template: `

       <div class="card bg-transparent border-success mb-3" >
            <div class="card-header border-success text-center" v-on:click.prevent.stop=_toggleCollapse>
                {{label}}
            </div>
            <div v-if="!isCollapsed" class="card-body bg-transparent">

                <div v-for="(value, index) in value" class="input-group mb-2">
                    <TInput :data="{label: index, value: value}" :onChange="function(event){_onChange(index, event)}" />
                    <div class="input-group-append">
                        <button class="btn btn-danger" v-on:click.prevent.stop="_onRemove( index )">X</button>
                    </div>
                </div>
                
                <button class="btn btn-success btn-block" v-on:click.prevent.stop="_onAdd()">Ajouter</button>

            </div>
        </div>  
        
    </div>
    `,
    data: function () {

        return {
            isCollapsed: false
        }

    },
    props:   [ 'label', 'value', 'onChange' ],
    methods: {

        _toggleCollapse () {

            this.isCollapsed = !this.isCollapsed

        },

        _onChange ( index, event ) {

            const array = this.value.slice()

            // Required to reset the input field before any parent update
            const previousValue = array[ index ]

            array[ index ]     = event.target.value
            event.target.value = previousValue

            this.onChange( array )

        },

        _onAdd () {

            const array = this.value.slice()
            array.push( '' )

            this.onChange( array )

        },

        _onRemove ( index ) {

            const array = this.value.slice()
            array.splice( index, 1 )

            this.onChange( array )

        }

    }

} )
