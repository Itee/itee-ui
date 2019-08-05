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

class TMenu extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const { value, onChangeHandler } = this.props

        const menuStyle = {
            listStyleType: 'none',
            margin:        0,
            padding:       0
        }

        return (
            <ul style={menuStyle}>{this.props.children}</ul>
        )

    }
}

export { TMenu }
