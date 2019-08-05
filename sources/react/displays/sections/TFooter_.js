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

class TFooter extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const { height, children } = this.props

        const _STYLE = {
            flex:      `0 1 ${height}px`,
            minHeight: `${height}px`
        }

        return (
            <footer className={'footer'} style={_STYLE}>
                {children}
            </footer>
        )

    }

}

export { TFooter }
