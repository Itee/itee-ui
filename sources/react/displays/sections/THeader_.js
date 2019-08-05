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

class THeader extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const props = this.props

        const _style = {
            flex: '0 1 auto'
        }

        return (
            <header className={'header'} style={_style}>
                {props.children}
            </header>
        )

    }

}

export { THeader }
