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

export default Vue.component( 'TToolDropDown', {
    template: `
        <div :class=computeClass :title=tooltip @mouseenter=onMouseEnterHandler @mouseleave=onMouseLeaveHandler>
            <TLabel class="tDropDownLabel" :label=label :icon=icon></TLabel>
            <div class="tDropDownContent" :style=computeContentStyle>
                <slot></slot>
            </div>
        </div>
    `,
    data: function () {

        return {
            isHover:       true,
            isVisible:     false,
            contentHeight: 0,
            contentWidth:  0
        }

    },
    props:    [ 'popAt', 'icon', 'label', 'tooltip', 'isActive' ],
    computed: {

        computeClass () {

            let classList = 'tToolDropDown'

            switch ( this.popAt ) {

                case 'top':
                    classList += ' popAtTop'
                    break

                case 'topRight':
                    classList += ' popAtTopRight'
                    break

                case 'topRightCorner':
                    classList += ' popAtTopRightCorner'
                    break

                case 'rightUp':
                    classList += ' popAtRightUp'
                    break

                case 'right':
                    classList += ' popAtRight'
                    break

                case 'rightDown':
                    classList += ' popAtRightDown'
                    break

                case 'bottomRightCorner':
                    classList += ' popAtBottomRightCorner'
                    break

                case 'bottomRight':
                    classList += ' popAtBottomRight'
                    break

                case 'bottom':
                    classList += ' popAtBottom'
                    break

                case 'bottomLeft':
                    classList += ' popAtBottomLeft'
                    break

                case 'bottomLeftCorner':
                    classList += ' popAtBottomLeftCorner'
                    break

                case 'leftDown':
                    classList += ' popAtLeftDown'
                    break

                case 'left':
                    classList += ' popAtLeft'
                    break

                case 'leftUp':
                    classList += ' popAtLeftUp'
                    break

                case 'topLeftCorner':
                    classList += ' popAtTopLeftCorner'
                    break

                case 'topLeft':
                    classList += ' popAtTopLeft'
                    break

                default:
                    throw new RangeError( `Invalid switch parameter: ${this.popAt}`, 'TDropDownMenu' )

            }

            if ( this.isActive ) {
                classList += ' isActive'
            }

            return classList

        },

        computeContentStyle () {

            let _contentStyle = {
                position:   'absolute',
                //                minWidth: '100%',
                display:    ( this.isHover ) ? 'block' : 'none',
                visibility: ( this.isVisible ) ? 'visible' : 'hidden'
            }

            const thisElement = this.$el
            if ( !thisElement ) {
                return _contentStyle
            }

            const offsetTop     = thisElement.offsetTop
            const offsetLeft    = thisElement.offsetLeft
            const offsetHeight  = thisElement.offsetHeight
            const offsetWidth   = thisElement.offsetWidth
            const contentHeight = this.contentHeight
            const contentWidth  = this.contentWidth
            let top             = 0
            let left            = 0

            // Todo: check if poped ele is not out of screen bounds !
            switch ( this.popAt ) {

                case 'top':
                    top  = offsetTop - contentHeight
                    left = offsetLeft + ( ( offsetWidth / 2 ) - ( contentWidth / 2 ) )
                    break

                case 'topRight':
                    top  = offsetTop - contentHeight
                    left = offsetLeft + offsetWidth - contentWidth
                    break

                case 'topRightCorner':
                    top  = offsetTop - contentHeight
                    left = offsetLeft + offsetWidth
                    break

                case 'rightUp':
                    top  = offsetTop
                    left = offsetLeft + offsetWidth
                    break

                case 'right':
                    top  = offsetTop + ( offsetHeight / 2 ) - ( contentHeight / 2 )
                    left = offsetLeft + offsetWidth
                    break

                case 'rightDown':
                    top  = offsetTop + offsetHeight - contentHeight
                    left = offsetLeft + offsetWidth
                    break

                case 'bottomRightCorner':
                    top  = offsetTop + offsetHeight
                    left = offsetLeft + offsetWidth
                    break

                case 'bottomRight':
                    top  = offsetTop + offsetHeight
                    left = offsetLeft + offsetWidth - contentWidth
                    break

                case 'bottom':
                    top  = offsetTop + offsetHeight
                    left = offsetLeft + ( offsetWidth / 2 ) - ( contentWidth / 2 )
                    break

                case 'bottomLeft':
                    top  = offsetTop + offsetHeight
                    left = offsetLeft
                    break

                case 'bottomLeftCorner':
                    top  = offsetTop + offsetHeight
                    left = offsetLeft - contentWidth
                    break

                case 'leftDown':
                    top  = offsetTop + offsetHeight - contentHeight
                    left = offsetLeft - contentWidth
                    break

                case 'left':
                    top  = offsetTop + ( ( offsetHeight / 2 ) - ( contentHeight / 2 ) )
                    left = offsetLeft - contentWidth
                    break

                case 'leftUp':
                    top  = offsetTop
                    left = offsetLeft - contentWidth
                    break

                case 'topLeftCorner':
                    top  = offsetTop - contentHeight
                    left = offsetLeft - contentWidth
                    break

                case 'topLeft':
                    top  = offsetTop - contentHeight
                    left = offsetLeft
                    break

                default:
                    throw new RangeError( `Invalid switch parameter: ${this.popAt}`, 'TDropDownMenu' )

            }

            _contentStyle.top  = `${top}px`
            _contentStyle.left = `${left}px`

            return _contentStyle

        }

    },
    mounted () {

        // Trick to get tDropDownContent size
        this.isHover   = false
        this.isVisible = true

        const dropDownContent = this.$el.lastChild
        this.contentHeight    = dropDownContent.offsetHeight
        this.contentWidth     = dropDownContent.offsetWidth

    },
    methods: {

        onMouseEnterHandler ( event ) {

            this.isHover = true
            event.preventDefault()

        },

        onMouseLeaveHandler ( event ) {

            this.isHover = false
            event.preventDefault()

        }

    }

} )
