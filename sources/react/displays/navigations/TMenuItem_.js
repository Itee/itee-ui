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

class TMenuItem extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const { id, icon, label, target, tooltip, clickHandler } = this.props

        const menuItemStyle = {
            float: 'left'
        }

        const linkStyle = {
            display:        'block',
            color:          'white',
            fontSize:       '1.6em',
            textAlign:      'center',
            padding:        '14px 16px',
            textDecoration: 'none'
        }

        if ( icon ) {

            return (
                <li className={'tMenuItem'} style={menuItemStyle}>
                    <a id={id} style={linkStyle} href={target} title={tooltip} onClick={clickHandler}>
                        <i className={icon}></i>
                        {label}
                    </a>
                </li>
            )

        } else {

            return (
                <li className={'tMenuItem'} style={menuItemStyle}>
                    <a id={id} style={linkStyle} href={target} title={tooltip} onClick={clickHandler}>{label}</a>
                </li>
            )

        }

    }
}

export { TMenuItem }
