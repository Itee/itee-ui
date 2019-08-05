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

class TAppBar extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {

        console.log( 'TAppBar componentDidMount' )

    }

    componentWillUnmount () {

        console.log( 'TAppBar componentWillUnmount' )

    }

    render () {

        const props = this.props

        const className = `tAppBar`

        const style = {
            display:        'flex',
            justifyContent: 'space-between'
        }

        const subStyle = {
            display:      'flex',
            alignContent: 'center',
            alignItems:   'center'
        }

        return (
            <div className={className} style={style}>
                <div className={'appbar-left'} style={subStyle}>
                    {props.left}
                </div>
                <div className={'appbar-center'} style={subStyle}>
                    {props.center}
                </div>
                <div className={'appbar-right'} style={subStyle}>
                    {props.right}
                </div>
            </div>
        )

    }

}

export { TAppBar }

