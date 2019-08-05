/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @class TToolBar
 * @classdesc The TToolBar is a generic container for TToolButtons
 *
 * @example Todo
 *
 */

import Vue from 'vue'

export default Vue.component( 'TToolBar', {
    template: `
        <TContainer 
            class="tToolBar" 
            :height=height 
            :width=width 
            :orientation=orientation 
            :expand=false 
            :wrapContent=false 
            vAlign="center" 
            hAlign="start" 
            overflow="visible"
        >
            <slot></slot>
        </TContainer>
    `,
    props: [ 'height', 'width', 'orientation' ]
} )
