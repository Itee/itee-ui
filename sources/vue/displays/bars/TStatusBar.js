/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @class TAppBar
 * @classdesc The status bar is design to be on bottom of the page, and should contain some text display and/or data about the application status.
 *
 * @example
 *
 * <TStatusBar>
 *     application ready
 * </TStatusBar>
 *
 */

import Vue from 'vue'

export default Vue.component( 'TStatusBar', {
    template: `
        <TContainer 
            class="tStatusBar" 
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
