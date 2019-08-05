/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isDefined }                from 'itee-validators'
//import { isDefined }                from 'itee-validators/sources/cores/voids/isDefined'
import Vue                          from 'vue'
import { DefaultLogger as TLogger } from '../../../loggers/TLogger'

export default Vue.component( 'TTreeItem', {
    template: `
        <li v-if="forceUpdate" :class=computeTreeItemClass>
            <TContainerHorizontal :class=computeTreeItemContentClass hAlign="start" vAlign="center">
                <TIcon v-if="haveChildren() && acceptableDeepLevel" :iconProps=computeToggleChildrenIconClass :iconOn="{click: toggleChildren}" />
                <span v-for="modifier in filteredAntelabelModifier" class="tTreeItemModifiers">
                    <TIcon v-if="modifier.type === 'icon'" :iconProps='modifier.icon' v-bind:iconOn="{click: modifier.onClick}" />
                    <TCheckIcon v-else-if="modifier.type === 'checkicon'" :iconOn="modifier.iconOn" :iconOff="modifier.iconOff" :value="modifier.value" :onClick=modifier.onClick />
                    <TButton v-else-if="modifier.type === 'button'" :label="modifier.label" :icon="modifier.icon" :onClick=modifier.onClick :messageData="modifier.value" />
                    <input v-else-if="modifier.type === 'range'" class="tInputRange form-control" type="range" value="100" max="100" @input="modifier.onInput" />
                    <input v-else-if="modifier.type === 'number'" type="number" @change="modifier.onChange" />
                    <input v-else-if="modifier.type === 'color'" type="color" @change="modifier.onChange" />
                    <label v-else>Error: Unknown modifier of type "{{modifier.type}}" !!!</label>
                </span>
                <label @click="function () { updateSelectionState( onClick ) }">{{name}}</label>
                <span v-for="modifier in filteredPostlabelModifier" class="tTreeItemModifiers">
                    <TIcon v-if="modifier.type === 'icon'" :iconProps='modifier.icon' v-bind:iconOn="{click: modifier.onClick}" />
                    <TCheckIcon v-else-if="modifier.type === 'checkicon'" :iconOn="modifier.iconOn" :iconOff="modifier.iconOff" :value="modifier.value" :onClick=modifier.onClick />
                    <TButton v-else-if="modifier.type === 'button'" :label="modifier.label" :icon="modifier.icon" :onClick=modifier.onClick :messageData="modifier.value" />
                    <input v-else-if="modifier.type === 'range'" class="tInputRange form-control" type="range" value="100" max="100" @input="modifier.onInput" />
                    <input v-else-if="modifier.type === 'number'" type="number" @change="modifier.onChange" />
                    <input v-else-if="modifier.type === 'color'" type="color" @change="modifier.onChange" />
                    <label v-else>Error: Unknown modifier of type "{{modifier.type}}" !!!</label>
                </span>
            </TContainerHorizontal>
            <ul v-if="haveChildren() && acceptableDeepLevel && showChildren" :class=computeTreeItemChildrenClass :style=computeChildrenStyle>
                <TTreeItem
                    v-for="child in computedChildren"
                    v-bind:key="child.id"
                    v-bind:name="child.name"
                    v-bind:onClick="child.onClick"
                    v-bind:modifiers="child.modifiers"
                    v-bind:children="child.children"
                    v-bind:filters="filters"
                    v-bind:sort="sort"
                    v-bind:deepSelect="deepSelect"
                    v-bind:multiSelect="multiSelect"
                    v-bind:needUpdate="needUpdate"
                    v-bind:maxDeepLevel="maxDeepLevel"
                    v-bind:_currentDeepLevel="_currentDeepLevel + 1"
                />
            </ul>
        </li>
    `,
    data: function () {

        return {
            showChildren: false,
            isSelected:   false
        }

    },
    props:    [ 'id', 'name', 'onClick', 'modifiers', 'children', 'filters', 'sort', 'deepSelect', 'multiSelect', 'needUpdate', 'maxDeepLevel', '_currentDeepLevel' ],
    computed: {

        computeTreeItemClass () {

            return ( this.isSelected && this.deepSelect ) ? 'tTreeItem selected' : 'tTreeItem'

        },

        computeTreeItemContentClass () {

            return ( this.isSelected && !this.deepSelect ) ? 'tTreeItemContent selected' : 'tTreeItemContent'

        },

        computeTreeItemChildrenClass () {

            if ( !this.children || this.children.length === 0 ) {
                return 'tTreeItemChildren'
            } else if ( this.children.length === 1 ) {
                return 'tTreeItemChildren singleChild'
            } else {
                return 'tTreeItemChildren multiChild'
            }

        },

        computeToggleChildrenIconClass () {

            // Todo: Make them props
            return ( this.showChildren ) ? 'chevron-circle-down' : 'chevron-circle-right'

        },

        computeChildrenStyle () {

            return {
                display: ( this.showChildren ) ? 'block' : 'none'
            }

        },

        computedChildren () {

            let children = this.children

            if ( isDefined( this.filters ) ) {
                children = this.filterChildren( children )
            }

            if ( isDefined( this.sort ) ) {
                children = this.sortChildren( children )
            }

            return children

        },

        filteredAntelabelModifier () {

            return ( isDefined( this.modifiers ) ) ? this.modifiers.filter( ( modifier ) => {

                return modifier.position === 'antelabel' && ( modifier.display === undefined || ( modifier.display === 'onSelect' && this.isSelected ) )

            } ) : []

        },

        filteredPostlabelModifier () {

            return ( isDefined( this.modifiers ) ) ? this.modifiers.filter( ( modifier ) => {

                return modifier.position === 'postlabel' && ( modifier.display === undefined || ( modifier.display === 'onSelect' && this.isSelected ) )

            } ) : []

        },

        acceptableDeepLevel () {

            return ( this._currentDeepLevel < this.maxDeepLevel )

        },

        forceUpdate () {

            if ( this.needUpdate ) { return true }
            if ( !this.needUpdate ) { return true }
            return true

        }

    },
    methods: {

        haveChildren () {

            return ( this.children && this.children.length > 0 )

        },

        toggleChildren () {

            this.showChildren = !this.showChildren

        },

        filterChildren ( children ) {

            return children.filter( child => !this.filters.includes( child.name ) )

        },

        sortChildren ( children ) {

            // Todo: Externalize the sort function as use defined function. And implement current sort function as utility
            if ( ![ 'asc', 'desc' ].includes( this.sort ) ) {
                TLogger.error( 'Invalid sorter !' )
                return
            }

            let sortedChildren = children.sort( ( a, b ) => {

                if ( a.name < b.name ) {
                    return -1
                }

                if ( a.name > b.name ) {
                    return 1
                }

                return 0

            } )

            if ( this.sort === 'desc' ) {
                sortedChildren.reverse()
            }

            return sortedChildren

        },

        updateSelectionState ( onClickCallback ) {

            // Deselect
            if ( this.multiSelect === false ) {

                const selectedItem = document.querySelector( '.selected' )
                if ( isDefined( selectedItem ) ) {

                    const ttreeItem = ( this.deepSelect ) ? selectedItem.__vue__ : selectedItem.__vue__.$parent.$parent

                    // In case the multiselect if false but the deepSelect is true we need to check if the selectedItem is not the child of this instance
                    if ( this._uid !== ttreeItem._uid ) {

                        ttreeItem.isSelected = false

                    }

                }

            }

            // Select
            this.isSelected = !this.isSelected

            if ( onClickCallback ) {
                onClickCallback( this.isSelected )
            }

        }

    }

} )
