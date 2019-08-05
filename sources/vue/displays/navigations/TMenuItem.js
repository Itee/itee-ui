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

export default Vue.component( 'TMenuItem', {
    template: `
        <div v-if="onClick" :class=computedClass>
            <TLabel :label=label :icon=icon :tooltip=tooltip :onClickHandler=onClick />
        </div>
        <div v-else :class=computedClass>
            <TLabel :label=label :icon=icon :tooltip=tooltip />
        </div>
    `,
    props:    [ 'label', 'icon', 'target', 'tooltip', 'onClick', 'isActive' ],
    computed: {

        computedClass () {

            if ( this.isActive ) {
                return 'tMenuItem isActive'
            } else {
                return 'tMenuItem'
            }

        }

    }
} )
