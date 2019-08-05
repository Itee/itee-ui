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

class TNavbar extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {

        console.log( 'TNavbar componentDidMount' )
        const properties = this.props
        const children   = properties.children

        for ( let childIndex = 0, numberOfChildren = children.length ; childIndex < numberOfChildren ; childIndex++ ) {
            let child = children[ childIndex ]

            console.log( child )

        }

    }

    componentWillUnmount () {}

    render () {

        const properties = this.props
        const state      = properties.state // Fixed, Togglable, Floating
        const position   = properties.position // Top, Right, Bottom, Left

        const style = {
            backgroundColor: '#323232',
            position:        'fixed',
            height:          '40px',
            borderTop:       '1px solid rgb(30, 30, 30)',
            display:         'flex',
            alignItems:      'center'
        }

        switch ( state ) {

            case 'fixed':
                style[ 'position' ] = 'fixed'
                break

            case 'toggle':

                break

            case 'float':
                style[ 'position' ] = 'absolute'
                break

            default:
                throw new RangeError( `Invalid switch parameter: ${state}`, 'TNavbar', 40 )
                break

        }

        switch ( position ) {

            case 'top':
                style[ 'top' ]   = '0px'
                style[ 'width' ] = '100%'
                break

            case 'right':
                style[ 'right' ]  = '0px'
                style[ 'height' ] = '100%'
                break

            case 'bottom':
                style[ 'bottom' ] = '0px'
                style[ 'width' ]  = '100%'
                break

            case 'left':
                style[ 'left' ]   = '0px'
                style[ 'height' ] = '100%'
                break

            default:
                throw new RangeError( `Invalid switch parameter: ${position}`, 'TNavbar', 70 )
                break

        }

        return (
            <nav className={'tNavbar'} style={style}>
                {properties.children}
            </nav>
        )

    }

}

export { TNavbar }

