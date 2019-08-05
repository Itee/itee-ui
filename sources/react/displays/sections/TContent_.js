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

class TContent extends React.Component {

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
            flex:    '1 1 auto',
            display: 'flex'
        }

        return (
            <content className={'content'} style={_STYLE}>
                {props.children}
            </content>
        )

    }

}

export { TContent }
