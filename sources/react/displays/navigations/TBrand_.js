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

class TBrand extends React.Component {

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

        const { icon, label } = this.props

        const style = {
            fontSize:   '2em',
            fontWeight: 'bold',
            padding:    '0 10px',
            cursor:     'pointer'
        }

        return (
            <span style={style}>
                <i style={{ marginRight: '3px' }} className={icon}></i>
                {label}
            </span>
        )

    }

}

export { TBrand }
