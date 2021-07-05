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
import { DefaultLogger as TLogger } from 'itee-core'

export default Vue.component( 'TItemList', {
    template: `
        <TContainer
            class="tContainer tContainerCentered itemList" 
            :height=height 
            :width=width 
            :orientation=orientation 
            :expand=expand 
            :wrapContent=wrapContent 
            :vAlign=vAlign
            :hAlign=hAlign
            :wAlign=wAlign
            :overflow=overflow 
            :overflowX=overflowX 
            :overflowY=overflowY >
            <TLabel v-for="item in items" :class=item.class :label=item.label></TLabel>
        </TContainer>
    `,
    template_old: `
        <div :class=computeClass :style=computeStyle>
            <TLabel v-for="item in items" :class=item.class :label=item.label></TLabel>
        </div>
    `,
    props:    [ 'height', 'width', 'orientation', 'expand', 'wrapContent', 'vAlign', 'hAlign', 'wAlign', 'overflow', 'overflowX', 'overflowY', 'items' ],
    computed: {
        computeClass () {

            let classList = ''

            if ( this.orientation === 'vertical' ) {

                if ( this.vAlign === 'stretch' ) {

                    classList = 'itemlist vertical stretchChildren'

                } else {

                    classList = 'itemlist vertical'

                }

            } else {

                if ( this.hAlign === 'stretch' ) {

                    classList = 'itemlist horizontal stretchChildren'

                } else {

                    classList = 'itemlist horizontal'

                }

            }

            return classList

        },
        computeStyle () {

            let style = {
                display: 'flex'
            }

            style.overflow = this.overflow || 'auto'

            if ( this.expand && this.width && this.height ) {

                TLogger.warn( `TItemList: Conflict between expand, width and height ! Defaulting to width and height.` )
                style.width  = this.width
                style.height = this.height

            } else if ( this.expand && this.width ) {

                TLogger.warn( `TItemList: Conflict between expand and width ! Defaulting to width.` )
                style.width = this.width

            } else if ( this.expand && this.height ) {

                TLogger.warn( `TItemList: Conflict between expand and height ! Defaulting to height.` )
                style.height = this.height

            } else if ( this.expand ) {

                style.flexGrow = 1

            } else if ( this.width && this.height ) {

                style.width  = this.width
                style.height = this.height

            } else if ( this.width ) {

                style.width = this.width

            } else if ( this.height ) {

                style.height = this.height

            } else {

                //... nothing

            }

            if ( this.orientation === 'vertical' ) {

                style.flexDirection = 'column'

                switch ( this.vAlign ) {

                    case 'start':
                        style.justifyContent = 'flex-start'
                        break

                    case 'end':
                        style.justifyContent = 'flex-end'
                        break

                    case 'center':
                        style.justifyContent = 'center'
                        break

                    case 'spaced':
                        style.justifyContent = 'space-between'
                        break

                    case 'justified':
                        style.justifyContent = 'space-around'
                        break

                    case 'stretch':
                        TLogger.warn( 'TItemList: Unable to stretch content in a vertical container !' )
                        break

                    case 'baseline':
                        TLogger.warn( 'TItemList: Unable to align content on a horizontal baseline in a vertical container !' )
                        break

                    default:
                        style.justifyContent = 'flex-start'
                        break

                }

                switch ( this.hAlign ) {

                    case 'start':
                        style.alignItems = 'flex-start'
                        break

                    case 'end':
                        style.alignItems = 'flex-end'
                        break

                    case 'center':
                        style.alignItems = 'center'
                        break

                    case 'spaced':
                        TLogger.warn( 'TItemList: Unable to space content in a vertical container !' )
                        break

                    case 'justified':
                        TLogger.warn( 'TItemList: Unable to justify content in a vertical container !' )
                        break

                    case 'baseline':
                        style.alignItems = 'baseline'
                        break

                    case 'stretch':
                        style.alignItems = 'stretch'
                        break

                    default:
                        style.alignItems = 'flex-start'
                        break

                }

            } else {

                style.flexDirection = 'row'

                switch ( this.vAlign ) {

                    case 'start':
                        style.alignItems = 'flex-start'
                        break

                    case 'end':
                        style.alignItems = 'flex-end'
                        break

                    case 'center':
                        style.alignItems = 'center'
                        break

                    case 'spaced':
                        TLogger.warn( 'TItemList: Unable to space content in a horizontal container !' )
                        break

                    case 'justified':
                        TLogger.warn( 'TItemList: Unable to justify content in a horizontal container !' )
                        break

                    case 'stretch':
                        style.alignItems = 'stretch'
                        break

                    case 'baseline':
                        style.alignItems = 'baseline'
                        break

                    default:
                        TLogger.error( `TItemList: Unknown vertical alignement: ${this.vAlign} !!!` )
                        break

                }

                switch ( this.hAlign ) {

                    case 'start':
                        style.justifyContent = 'flex-start'
                        break

                    case 'end':
                        style.justifyContent = 'flex-end'
                        break

                    case 'center':
                        style.justifyContent = 'center'
                        break

                    case 'spaced':
                        style.justifyContent = 'space-between'
                        break

                    case 'justified':
                        style.justifyContent = 'space-around'
                        break

                    case 'stretch':
                        TLogger.warn( 'TItemList: Unable to stretch content in a horizontal container !' )
                        break

                    case 'baseline':
                        TLogger.warn( 'TItemList: Unable to align content on a horizontal baseline in a horizontal container !' )
                        break

                    default:
                        TLogger.error( `TItemList: Unknown horizontal alignement: ${this.hAlign} !!!` )
                        break

                }

            }

            if ( this.wrapContent ) {

                style.flexWrap = 'wrap'

                switch ( this.wAlign ) {

                    case 'start':
                        style.alignContent = 'flex-start'
                        break

                    case 'end':
                        style.alignContent = 'flex-end'
                        break

                    case 'center':
                        style.alignContent = 'center'
                        break

                    case 'spaced':
                        style.alignContent = 'space-between'
                        break

                    case 'justified':
                        style.alignContent = 'space-around'
                        break

                    case 'stretch':
                        style.alignContent = 'stretch'
                        break

                    default:
                        style.alignContent = 'flex-start'
                        break
                }

            } else {

                style.flexWrap = 'nowrap'

                if ( this.wAlign ) {
                    TLogger.warn( 'TItemList: Unable to set content wrapping alignment with a unwrapped container !' )
                }

            }

            return style

        }
    }
} )
