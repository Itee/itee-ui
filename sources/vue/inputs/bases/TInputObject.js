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

export default Vue.component( 'TInputObject', {
    template: `

       <div class="card bg-transparent border-success mb-3">
            <div class="card-header border-success text-center" v-on:click.prevent.stop=_toggleCollapse>
                {{label}}
            </div>
            <div v-if="!isCollapsed" class="card-body bg-transparent" style="overflow-y: auto;">

                <div v-for="(property, key) in filteredProperties">
                    <TInput v-if="key && value" :data="{label: key, value: property}" :onChange="function(newValue){_onChange(key, newValue)}" />
                    <TInput v-else-if="key && !value" :data="{label: key, value: null}" :onChange="function(newValue){_onChange(key, newValue)}" />
                    <TInput v-else-if="!key && value" :data="{label: '', value: property}" :onChange="function(newValue){_onChange(key, newValue)}" />
                    <TInput v-else :data="{label: '', value: null}" :onChange="function(newValue){_onChange(key, newValue)}" />
                </div>
                                
            </div>
        </div>  
        
    </div>
    `,
    data: function () {

        return {
            isCollapsed: false
        }

    },
    props:    [ 'label', 'value', 'onChange', 'filter' ],
    computed: {

        filteredProperties () {

            if ( !this.filter ) {
                return this.value
            }

            const filteredProperties = {}
            const value              = this.value
            const filter             = this.filter

            Object.keys( value )
                  .forEach( key => {

                      const property = value[ key ]

                      if ( filter( key, property ) ) {
                          filteredProperties[ key ] = property
                      }

                  } )

            return filteredProperties

        }

    },
    methods: {

        _toggleCollapse () {

            this.isCollapsed = !this.isCollapsed

        },

        _onChange ( key, newValue ) {

            //Todo: Should return a deep copy updated ??!
            this.onChange( key, newValue )

        }

        //        _availableProperty ( propertyName ) {
        //
        //            if ( !this.filters ) {
        //                return true
        //            }
        //
        //            return (this.filters.indexOf( propertyName ) === -1)
        //
        //        }

    }

} )
