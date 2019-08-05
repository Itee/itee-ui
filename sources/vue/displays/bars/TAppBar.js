/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @class TAppBar
 * @classdesc This is the top application bar that contain 3 sub part, one left, one center and one right. The purpose of this bar container is to display an brand to left, the main menu to center
 *     and login button to the right.
 *
 * @example //todo...
 *
 *
 */

import Vue from 'vue'

export default Vue.component( 'TAppBar', {
    template: `
        <TContainer 
            class="tAppBar" 
            :height=height 
            :width=width 
            :orientation=orientation 
            :expand=false 
            :wrapContent=false 
            vAlign="stretch" 
            hAlign="spaced" 
            overflow="visible"
        >
            <slot></slot>
        </TContainer>
    `,
    props: [ 'height', 'width', 'orientation' ]

} )
