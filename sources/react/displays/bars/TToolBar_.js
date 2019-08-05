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

class TToolbar extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {

        console.log( this.constructor.name + ' componentDidMount' )
        //        console.log( 'TToolbar componentDidMount' )
        //        const properties = this.props
        //        const children   = properties.children
        //
        //        for ( let childIndex = 0, numberOfChildren = children.length ; childIndex < numberOfChildren ; childIndex++ ) {
        //            let child = children[ childIndex ]
        //
        //            console.log( child )
        //
        //        }

    }

    componentWillUnmount () {

        console.log( this.constructor.name + ' componentWillUnmount' )

    }

    render () {

        const { children } = this.props

        const _STYLE = {
            display:    'flex',
            alignItems: 'center'
        }

        console.log()

        return (
            <nav className={'tToolBar'} style={_STYLE}>
                {children}
            </nav>
        )

    }

}

export { TToolbar }

