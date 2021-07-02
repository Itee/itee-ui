/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Vue                          from 'vue'
import './TTreeItem'

export default Vue.component( 'TTree', {
    template: `
        <TContainerVertical class="tTree" hAlign="start" vAlign="start" overflowY="auto">
            <div class="tTreeHeader">
                <slot name="header"></slot>
            </div>
            <ul v-if="haveItems()" class="tTreeItemChildren p-2">
                <TTreeItem
                    v-for="item in computedItems"
                    v-bind:key="item.id"
                    v-bind:id="item.id"
                    v-bind:name="item.name"
                    v-bind:isSelected="item.isSelected"
                    v-bind:isHovered="item.isHovered"
                    v-bind:modifiers="item.modifiers"
                    v-bind:children="item.children"
                    v-bind:filters="filters"
                    v-bind:sort="sort"
                    v-bind:selectAllChildren="selectAllChildren"
                    v-bind:multiSelect="multiSelect"
                    v-bind:maxDeepLevel="maxDeepLevel"
                    v-bind:_currentDeepLevel="0"
                    v-on="$listeners"
                />
            </ul>
        </TContainerVertical>
    `,
    props: {
        items: {
            type: Array
        },
        filters: {
            type: Array
        },
        sort: {
            type:    String,
            default: 'asc'
        },
        multiSelect: {
            type:    Boolean,
            default: false
        },
        selectAllChildren: {
            type:    Boolean,
            default: false
        },
        minDeepLevel: {
            type:    Number,
            default: 0
        },
        maxDeepLevel: {
            type:    Number,
            default: 10
        }
    },
    computed: {

        computedItems () {

            let items = this.items || []

            if ( this.minDeepLevel > 0 ) {
                items = this.confineItems( items, 0 )
            }

            if ( this.filters ) {
                items = this.filterItems( items )
            }

            if ( this.sort ) {
                items = this.sortItems( items )
            }

            return items

        }

    },
    methods: {

        haveItems () {

            return this.items && this.items.length > 0

        },

        confineItems ( objects, deepLevel ) {

            if ( deepLevel === this.minDeepLevel ) { return objects }

            const children = []
            for ( let index = 0, numberOfObjects = objects.length ; index < numberOfObjects ; index++ ) {
                children.push( ...this.confineItems( objects[ index ].children, deepLevel + 1 ) )
            }
            return children

        },

        filterItems ( items ) {

            return items.filter( item => !this.filters.includes( item.name ) )

        },

        sortItems ( items ) {

            // Todo: Externalize the sort function as use defined function. And implement current sort function as utility
            if ( ![ 'asc', 'desc' ].includes( this.sort ) ) {
                return
            }

            let sortedItems = items.sort( ( a, b ) => {

                if ( a.name < b.name ) {
                    return -1
                }

                if ( a.name > b.name ) {
                    return 1
                }

                return 0

            } )

            if ( this.sort === 'desc' ) {
                sortedItems.reverse()
            }

            return sortedItems

        }

    }
} )
