/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

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

export default Vue.component( 'TSearch', {
    template: `
            <div id="tsearch" class="input-group mb-3">

                    <div v-if="label" class="input-group-prepend">
                        <label class="input-group-text">{{label}}</label>
                    </div>
                    
                    <input type="text" class="form-control" :placeholder="placeholder" @change=_onChange>

                    <ul v-if=" isAutoCompleteEnabled && (items.length > 0 || message !== '') " class="autocomplete-list" >
                      <h6 v-if="message !== ''"> {{message}} </h6>
                      <li v-for="(item, index) in items" @click=_onClick(item)> 
                        <span v-if="autoCompleteFirstValue"> {{ computeFirstValue[index] }} </span>
                        <small v-if="autoCompleteSecondaryValue" > [{{ computeSecondValue[index] }}] </small> 
                      </li>
                    </ul>

                    <div class="input-group-append tsearch-toolbar">
                      <span class="tsearch-close" @click=onClose()> 
                        <TIcon icon="times" />
                      </span>
                      <span :class="dragClass"> 
                        <TIcon icon="arrows-alt" />
                      </span>
                    </div>
                    
            </div>
    `,
    data: function () {

        return {
            items:   [],
            message: ''
        }

    },
    props:    [ 'id', 'label', 'placeholder', 'isAutoCompleteEnabled', 'autoCompleteList', 'autoCompleteFirstValue', 'autoCompleteSecondaryValue', 'onChange', 'dragClass', 'onClose' ],
    computed: {

        computeFirstValue () {
            let me = this
            return this.items.map( function ( item ) {
                return item[ me.autoCompleteFirstValue ]
            } )
        },

        computeSecondValue ( /*item*/ ) {
            let me = this
            return this.items.map( function ( item ) {
                return item[ me.autoCompleteSecondaryValue ]
            } )
        }

    },
    methods: {

        _onChange ( event ) {

            let searchValue = event.target.value.toLowerCase()
            this.message    = ''

            if ( searchValue === '' ) {
                this.message = ''
                this.items   = []
                return
            }

            let filteredList = this.autoCompleteList.filter( item => item.name.toLowerCase().includes( searchValue ) )

            this.items = this._removeDuplicate( this._sortItems( filteredList ) )

            if ( this.items.length === 0 ) {
                this.message = 'Aucun résultat trouvé'
            }
        },

        _onClick ( item ) {

            let parentIdsList = []

            this._searchParentIds( item.parentId, parentIdsList )

            this.onChange( item, parentIdsList )

        },

        _searchParentIds ( parentId, parentIdsList ) {

            let parent = this.autoCompleteList.find( item => item.id === parentId )
            parentIdsList.push( parent.id )

            if ( parent.parentId === undefined ) {
                return
            }

            this._searchParentIds( parent.parentId, parentIdsList )

        },

        _removeDuplicate ( items ) {

            let filteredList = []

            items.forEach( ( item ) => {

                if ( !filteredList.some( x => ( x.id === item.id ) ) ) {
                    filteredList.push( item )
                }

            } )

            return filteredList
        },

        _sortItems ( items ) {

            return items.sort( ( a, b ) => {

                if ( a.name < b.name ) {
                    return -1
                }

                if ( a.name > b.name ) {
                    return 1
                }

                return 0

            } )
        }

    }
} )
