/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import React from 'react'

class TStatusBar extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const properties = this.props
        const state      = properties.state // Fixed, Togglable, Floating
        const position   = properties.position // Top, Right, Bottom, Left

        let _style = {
            height:     '40px',
            display:    'flex',
            alignItems: 'center'
        }

        switch ( state ) {

            case 'fixed':
                _style[ 'position' ] = 'fixed'
                break

            case 'toggle':

                break

            case 'float':
                _style[ 'position' ] = 'absolute'
                break

            default:
                throw new RangeError( `Invalid switch parameter: ${state}`, 'TNavbar', 40 )
                break

        }

        switch ( position ) {

            case 'top':
                _style[ 'top' ]   = '0px'
                _style[ 'width' ] = '100%'
                break

            case 'right':
                _style[ 'right' ]  = '0px'
                _style[ 'height' ] = '100%'
                break

            case 'bottom':
                _style[ 'bottom' ] = '0px'
                _style[ 'width' ]  = '100%'
                break

            case 'left':
                _style[ 'left' ]   = '0px'
                _style[ 'height' ] = '100%'
                break

            default:
                throw new RangeError( `Invalid switch parameter: ${position}`, 'TNavbar', 70 )
                break

        }

        return (
            <nav className={'tStatusBar'} style={_style}>
                {properties.children}
            </nav>
        )

    }

}

export { TStatusBar }

