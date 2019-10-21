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

// Todo: implement router facility here using target instead of clickHandler !

export default Vue.component( 'TToolItem', {
    template: `
        <div v-if="onClick" :class=computedClass :title=tooltip v-on:click=onClick(onClickData)>
            <TIcon v-if='icon' :icon="icon" class="tToolIcon" />
              {{label}}
            <slot></slot>
            <template v-if='isCheckableItem'>
              <TIcon v-if=computedState icon="check-square" v-on:click="_onClickCheckBox" class="tToolIcon" />
              <TIcon v-else icon="square" v-on:click="_onClickCheckBox" class="tToolIcon" />
            </template>
        </div>
        <div v-else :class=computedClass :title=tooltip >
            <TIcon v-if='icon' :icon="icon" class="tToolIcon" />
            {{label}}
            <slot></slot>
        </div>
    `,
    props:    [ 'label', 'icon', 'target', 'tooltip', 'onClick', 'onClickData', 'isActive', 'isCheckableItem', 'onClickCheckBox', 'onClickCheckBoxData', 'isCheckBoxActive' ],
    computed: {

        computedClass () {

            if ( this.isActive ) {
                return 'tToolItem isActive'
            } else {
                return 'tToolItem'
            }

        },

        computedState: function computedState () {

            return ( this.isActive && this.isCheckBoxActive )

        }

    },
    methods: {

        _onClickCheckBox ( /*event*/ ) {

            if ( this.isActive ) {

                this.onClickCheckBox( this.onClickCheckBoxData )

            }

        }

    }
} )
