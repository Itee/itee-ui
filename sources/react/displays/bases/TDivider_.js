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

class TDivider extends React.Component {

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

        const { orientation } = this.props

        if ( !orientation || orientation === 'vertical' ) {

            const style = {
                height:          '30px',
                width:           '1px',
                backgroundColor: '#9d9d9d',
                margin:          '5px 0px'
            }
            return (
                <li className={'divider'} style={style} role={'separator'}></li>
            )

        } else {

            const style = {
                height:          '1px',
                width:           '30px',
                backgroundColor: '#9d9d9d',
                margin:          '5px 0px'
            }
            return (
                <li className={'divider'} style={style} role={'separator'}></li>
            )

        }

    }

}

export { TDivider }
