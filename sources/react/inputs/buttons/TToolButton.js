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

class TToolButton extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {
        const { id, label, icon, title, onClickHandler } = this.props

        const toolButtonStyle = {}

        const linkStyle = {
            padding: '10px 15px',
            color:   'white'
        }

        return (
            <li
                id={id}
                className={'toolbutton'}
                style={toolButtonStyle}
                onClick={onClickHandler}>
                <a title={title} style={linkStyle}>
                    <i className={icon}></i>
                    {label}
                </a>
            </li>
        )

    }

}

export { TToolButton }
