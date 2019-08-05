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

class TDialogArea extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {

        console.log( this.constructor.name + ' componentDidMount' )

    }

    componentWillUnmount () {

        console.log( this.constructor.name + ' componentWillUnmount' )

    }

    render () {

        const props = this.props

        const _STYLE = {
            position:       'absolute',
            zIndex:         1000,
            top:            0,
            left:           0,
            height:         '100%',
            width:          '100%',
            display:        ( props.isVisible ) ? 'flex' : 'none',
            alignItems:     'center',
            justifyContent: 'center',
            background:     '#ffffffba'
        }

        return (
            <div className={'dialog-area'} style={_STYLE}>
                {props.children}
            </div>
        )

    }

}

export { TDialogArea }
