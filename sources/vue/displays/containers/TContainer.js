/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isString }                 from 'itee-validators'
import { DefaultLogger as TLogger } from 'itee-core'
import Vue                          from 'vue'
import {
    TIdFactory,
    TIdFactoryType
}                                   from '../../../utils/TIdFactory'

const IdFactory = new TIdFactory( TIdFactoryType.String, 't-container-' )

export default Vue.component( 'TContainer', {
    template: `
        <div :id=id :class=computeClass :style=computeStyle>
            <slot></slot>
        </div>
    `,
    props: {
        id: {
            type:    String,
            default: IdFactory.createId()
        },
        height: {
            type: Number
        },
        width: {
            type: Number
        },
        orientation: {
            type:    String,
            default: ''
        },
        vAlign: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'spaced', 'justified', 'stretch', 'baseline' ].includes( value ) }
        },
        hAlign: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'spaced', 'justified', 'stretch', 'baseline' ].includes( value ) }
        },
        wAlign: {
            type:      String,
            validator: ( value ) => { return [ 'start', 'end', 'center', 'spaced', 'justified', 'stretch' ].includes( value ) }
        },
        expand: {
            type:    Boolean,
            default: false
        },
        wrapContent: {
            type:    Boolean,
            default: false
        },
        overflow: {
            type: String
        },
        overflowX: {
            type: String
        },
        overflowY: {
            type: String
        }
    },
    watch: {

        // whenever question changes, this function will run
        width: function watchWidth ( newValue, oldValue ) {
            TLogger.log( `TContainer: Width change from ${oldValue} to ${newValue}` )
        },

        height: function watchHeight( newValue, oldValue ) {
            TLogger.log( `TContainer: Height change from ${oldValue} to ${newValue}` )
        }

    },
    computed: {

        computeClass () {

            let classList = ''

            if ( this.orientation === 'vertical' ) {

                if ( this.vAlign === 'stretch' ) {

                    classList = 'tContainer tContainerVertical stretchChildren'

                } else {

                    classList = 'tContainer tContainerVertical'

                }

            } else {

                if ( this.hAlign === 'stretch' ) {

                    classList = 'tContainer tContainerHorizontal stretchChildren'

                } else {

                    classList = 'tContainer tContainerHorizontal'

                }

            }

            return classList

        },

        computeStyle () {

            let style = {
                display: 'flex'
            }

            if ( this.overflow ) {
                style.overflow = this.overflow
            } else if ( this.overflowX ) {
                style.overflowX = this.overflowX
            } else if ( this.overflowY ) {
                style.overflowY = this.overflowY
            }

            if ( this.expand && this.width && this.height ) {

                TLogger.warn( `TContainer [${this.id}]: Conflict between expand, width and height ! Defaulting to width and height.` )
                style.width  = isString( this.width ) ? this.width : `${this.width}px`
                style.height = isString( this.height ) ? this.height : `${this.height}px`

            } else if ( this.expand && this.width ) {

                TLogger.warn( `TContainer [${this.id}]: Conflict between expand and width ! Defaulting to width.` )
                style.width = isString( this.width ) ? this.width : `${this.width}px`

            } else if ( this.expand && this.height ) {

                TLogger.warn( `TContainer [${this.id}]: Conflict between expand and height ! Defaulting to height.` )
                style.height = isString( this.height ) ? this.height : `${this.height}px`

            } else if ( this.expand ) {

                style.flexGrow = 1

            } else if ( this.width && this.height ) {

                style.width  = isString( this.width ) ? this.width : `${this.width}px`
                style.height = isString( this.height ) ? this.height : `${this.height}px`

            } else if ( this.width ) {

                style.width = isString( this.width ) ? this.width : `${this.width}px`

            } else if ( this.height ) {

                style.height = isString( this.height ) ? this.height : `${this.height}px`

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
                        TLogger.warn( `TContainer [${this.id}]: Unable to stretch content in a vertical container !` )
                        break

                    case 'baseline':
                        TLogger.warn( `TContainer [${this.id}]: Unable to align content on a horizontal baseline in a vertical container !` )
                        break

                    default:
                        TLogger.error( `TContainer [${this.id}]: Unknown vertical alignement: ${this.vAlign} !!!` )
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
                        TLogger.warn( `TContainer [${this.id}]: Unable to space content in a vertical container !` )
                        break

                    case 'justified':
                        TLogger.warn( `TContainer [${this.id}]: Unable to justify content in a vertical container !` )
                        break

                    case 'baseline':
                        style.alignItems = 'baseline'
                        break

                    case 'stretch':
                        style.alignItems = 'stretch'
                        break

                    default:
                        TLogger.error( `TContainer [${this.id}]: Unknown horizontal alignement: ${this.hAlign} !!!` )
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
                        TLogger.warn( `TContainer [${this.id}]: Unable to space content in a horizontal container !` )
                        break

                    case 'justified':
                        TLogger.warn( `TContainer [${this.id}]: Unable to justify content in a horizontal container !` )
                        break

                    case 'stretch':
                        style.alignItems = 'stretch'
                        break

                    case 'baseline':
                        style.alignItems = 'baseline'
                        break

                    default:
                        TLogger.error( `TContainer [${this.id}]: Unknown vertical alignement: ${this.vAlign} !!!` )
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
                        TLogger.warn( `TContainer [${this.id}]: Unable to stretch content in a horizontal container !` )
                        break

                    case 'baseline':
                        TLogger.warn( `TContainer [${this.id}]: Unable to align content on a horizontal baseline in a horizontal container !` )
                        break

                    default:
                        TLogger.error( `TContainer [${this.id}]: Unknown horizontal alignement: ${this.hAlign} !!!` )
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
                        TLogger.error( `TContainer [${this.id}]: Unknown horizontal alignement: ${this.wAlign} !!!` )
                        break
                }

            } else {

                style.flexWrap = 'nowrap'

                if ( this.wAlign ) {
                    TLogger.warn( `TContainer [${this.id}]: Unable to set content wrapping alignment with a unwrapped container !` )
                }

            }

            return style

        }

    }

} )
