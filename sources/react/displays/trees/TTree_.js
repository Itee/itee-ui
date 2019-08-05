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

class TTree extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const { header, children } = this.props

        const _style = {
            overflowY: 'auto',
            padding:   '5px',
            height:    '100%'
        }

        return (
            <div className={'tTree'} style={_style}>
                <div className={'tTreeHeader'}>
                    {header}
                </div>
                <div className={'tTreeContent'}>
                    {children}
                </div>
            </div>
        )

    }

}

export { TTree }
