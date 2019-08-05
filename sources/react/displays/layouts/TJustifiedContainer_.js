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

class TJustifiedContainer extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const props = this.props

        const _STYLE = {
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between'
        }

        return (
            <itee-container className={'container justified-container'} style={_STYLE}>{props.children}</itee-container>
        )

    }

}

export { TJustifiedContainer }
