/**
 * @author [Ahmed DCHAR]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Vue from 'vue'

export default Vue.component( 'TTable', {
    template: `
      <table class="ttable">
          <thead>
            <tr class="ttable-title">
              <th colspan="2">
                <h4 v-if="item" class="float-left"> {{ item.name }} </h4>
                <h4 v-else class="float-left"> {{ label }} </h4>
                <div class="ttable-toolbar">
                  <span class="ttable-close" @click=onClose()> 
                    <TIcon iconProps="times" iconClass="ttable-close" />
                  </span>
                  <span :class="dragClass">
                    <TIcon iconProps="arrows-alt" />
                  </span>
                </div>
              </th>
            </tr>
            <tr v-if="item !== undefined && displayColumnName">
              <th v-for="key in computedColumns">
                {{ key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="item === undefined">
              <td>
                <h6> {{message}} </h6>
              </td>
            </tr>
            <tr v-for="data in filteredData" v-else>
              <td v-for="key in computedColumns">
                {{ data[key] }}
              </td>
            </tr>
          </tbody>
      </table>
    `,
    data: function data () {

        return {
            items:           [],
            showChildren:    false,
            propertyColumns: [ 'Nom', 'Valeur' ],
            message:         'Aucune information n\'a été trouvée'
        }

    },
    props:    [ 'id', 'label', 'item', 'columns', 'filter', 'displayColumnName', 'onChange', 'dragClass', 'onClose' ],
    computed: {

        computedColumns: function computedColumns () {

            return ( typeof this.item === 'object' ) ? this.propertyColumns : this.columns
        },

        filteredData: function filteredData () {

            if ( !this.filter ) {
                return this.item
            }

            const value  = this.item
            const filter = this.filter

            return ( typeof value === 'object' ) ? this._formatAsProperty( value, filter ) : this._formatAsList( value, filter )
        }

    },
    methods: {

        _formatAsProperty: function _formatAsProperty ( data, filter ) {

            let me         = this
            let resultProp = []

            Object.keys( data )
                  .forEach( key => {

                      const property = data[ key ]
                      let prop       = {}

                      if ( filter( key, property ) ) {

                          if ( typeof property === 'object' && property !== null ) {
                              me._formatAsCategory( key, property, resultProp )
                              return
                          }

                          prop[ me.propertyColumns[ 0 ] ] = key
                          prop[ me.propertyColumns[ 1 ] ] = property
                          resultProp.push( prop )
                      }

                  } )

            return resultProp
        },

        _formatAsCategory: function _formatAsCategory ( catKey, value, result ) {

            let me = this

            Object.keys( value )
                  .forEach( key => {

                      const property = value[ key ]
                      let prop       = {}

                      // TODO : Category styling

                      prop[ me.propertyColumns[ 0 ] ] = key
                      prop[ me.propertyColumns[ 1 ] ] = property
                      result.push( prop )

                  } )
        },

        _formatAsList: function _formatAsList ( data, filter ) {

            let resultProp = []

            Object.keys( data )
                  .filter( filter )
                  .forEach( key => {
                      resultProp.push( data[ key ] )
                  } )

            return resultProp
        }

    }
} )
