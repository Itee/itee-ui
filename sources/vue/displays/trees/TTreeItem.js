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
import Vue                          from 'vue'
import TContainerHorizontal from '../containers/TContainerHorizontal'
import TIcon  from '../bases/TIcon'
import TCheckIcon  from '../../inputs/bases/TCheckIcon'

export default Vue.component( 'TTreeItem', {
    template: `
        <li :class=computeTreeItemClass>
            <TContainerHorizontal :class=computeTreeItemContentClass hAlign="start" vAlign="center">
                <TIcon v-if="haveChildren() && acceptableDeepLevel" :icon=computeToggleChildrenIconClass v-on:click="toggleChildren" />
                <span v-for="modifier in filteredAntelabelModifier" class="tTreeItemModifiers">
                    <TIcon v-if="modifier.type === 'icon'"  :icon='modifier.icon' v-on:click="_onModifierChange( modifier )" />
                    <TCheckIcon v-else-if="modifier.type === 'checkicon'"  :iconOn="modifier.iconOn" :iconOff="modifier.iconOff" v-model="modifier.value" v-on:change="_onModifierChange( modifier )" />
                    <input v-else-if="modifier.type === 'range'" type="range" class="tInputRange form-control" v-model="modifier.value" :min="modifier.min" :max="modifier.max" :step="modifier.step" v-on:input="_onModifierChange( modifier )" />
                    <input v-else-if="modifier.type === 'number'"  type="number" v-model="modifier.value" v-on:input="_onModifierChange( modifier )" />
                    <input v-else-if="modifier.type === 'color'"  type="color" v-model="modifier.value" v-on:change="_onModifierChange( modifier )" />
                    <label v-else>Error: Unknown modifier of type "{{modifier.type}}" !!!</label>
                </span>
                <label v-on:click.stop="_onClick" v-on:mouseover.stop="_onMouseOver" v-on:mouseout.stop="_onMouseOut">{{name}}</label>
                <span v-for="modifier in filteredPostlabelModifier" class="tTreeItemModifiers">
                    <TIcon v-if="modifier.type === 'icon'"  :icon='modifier.icon' v-on:click="_onModifierChange( modifier )" />
                    <TCheckIcon v-else-if="modifier.type === 'checkicon'"  :iconOn="modifier.iconOn" :iconOff="modifier.iconOff" v-model="modifier.value" v-on:change="_onModifierChange( modifier )" />
                    <input v-else-if="modifier.type === 'range'" type="range" class="tInputRange form-control" v-model="modifier.value" :min="modifier.min" :max="modifier.max" :step="modifier.step" v-on:input="_onModifierChange( modifier )" />
                    <input v-else-if="modifier.type === 'number'"  type="number" v-model="modifier.value" v-on:input="_onModifierChange( modifier )" />
                    <input v-else-if="modifier.type === 'color'"  type="color" v-model="modifier.value" v-on:change="_onModifierChange( modifier )" />
                    <label v-else>Error: Unknown modifier of type "{{modifier.type}}" !!!</label>
                </span>
            </TContainerHorizontal>
            <ul v-if="haveChildren() && acceptableDeepLevel && showChildren" :class=computeTreeItemChildrenClass :style=computeChildrenStyle>
                <TTreeItem
                    v-for="child in computedChildren"
                    v-bind:key="child.id"
                    v-bind:id="child.id"
                    v-bind:name="child.name"
                    v-bind:isSelected="child.isSelected"
                    v-bind:isHovered="child.isHovered"
                    v-bind:modifiers="child.modifiers"
                    v-bind:children="child.children"
                    v-bind:filters="filters"
                    v-bind:sort="sort"
                    v-bind:multiSelect="multiSelect"
                    v-bind:selectAllChildren="selectAllChildren"
                    v-bind:maxDeepLevel="maxDeepLevel"
                    v-bind:_currentDeepLevel="_currentDeepLevel + 1"
                    v-on="$listeners"
                />
            </ul>
        </li>
    `,
    data:     function () {

        return {
            showChildren: false
        }

    },
    props:    {
        id:                {
            type:     Number,
            required: true
        },
        name:              {
            type:     String,
            required: true
        },
        isSelected:        {
            type:    Boolean,
            default: false
        },
        isHovered:         {
            type:    Boolean,
            default: false
        },
        modifiers:         {
            type: Array
        },
        children:          {
            type: Array
        },
        filters:           {
            type: Array
        },
        sort:              {
            type:    String,
            default: 'asc'
        },
        multiSelect:       {
            type:    Boolean,
            default: false
        },
        selectAllChildren: {
            type:    Boolean,
            default: false
        },
        maxDeepLevel:      {
            type:    Number,
            default: 10
        },
        _currentDeepLevel: {
            type:     Number,
            required: true
        }
    },
    computed: {

        computeTreeItemClass () {

            let classes = 'tTreeItem'
            if ( this.isSelected && this.selectAllChildren ) { classes += ' selectedChildren' }
            if ( this.isHovered ) { classes += ' hovered' }

            return classes

        },

        computeTreeItemContentClass () {

            return ( this.isSelected && !this.selectAllChildren ) ? 'tTreeItemContent selected' : 'tTreeItemContent'

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

        }

    },
    methods:  {

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

        _onModifierChange( modifier ) {

            this.$emit('item-modifier-change', this.id, modifier.action, modifier.value)

        },
        _onMouseOver () {

            this.$emit( 'item-mouseover', this.id )

        },
        _onMouseOut () {

            this.$emit( 'item-mouseout', this.id )

        },
        _onClick () {

            this.$emit( 'item-click', this.id )

        }

    }
} )
