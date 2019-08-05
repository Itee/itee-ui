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

class TDropDownMenu extends React.Component {

    constructor ( props ) {

        super( props )

        this.state = {
            isHover: false
        }

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind( this )
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind( this )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    onMouseEnterHandler ( event ) {

        this.setState( { isHover: true } )
        event.preventDefault()

    }

    onMouseLeaveHandler ( event ) {

        this.setState( { isHover: false } )
        event.preventDefault()

    }

    render () {

        const { icon, label, align } = this.props

        const dropdownStyle = {
            float:         'left',
            listStyleType: 'none'
        }

        const labelStyle = {
            display:        'block',
            color:          'white',
            fontSize:       '1.6em',
            textAlign:      'center',
            padding:        '14px 16px',
            textDecoration: 'none'
        }

        let contentStyle = {
            listStyleType: 'none',
            position:      'absolute',
            minWidth:      '100%'
        }

        if ( this.state.isHover ) {
            contentStyle[ 'display' ] = 'block'
        } else {
            contentStyle[ 'display' ] = 'none'
        }

        if ( align === 'left' ) {
            contentStyle[ 'left' ] = 0
        } else if ( align === 'right' ) {
            contentStyle[ 'right' ] = 0
        } else {
            // Todo: center
        }

        if ( icon && label ) {

            return (
                <li className={'dropdown'} style={dropdownStyle} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <a className={'dropdown-label'} style={labelStyle}>
                        <i className={icon}></i>
                        {label}
                    </a>
                    <div className={'dropdown-content'} style={contentStyle}>
                        {this.props.children}
                    </div>
                </li>
            )

        } else if ( icon && !label ) {

            const iconStyle = {
                fontSize:     '46px',
                marginRight:  '11px',
                marginBottom: '6px',
                marginTop:    '6px',
                color:        'white'
            }

            return (
                <li className={'dropdown'} style={dropdownStyle} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <a className={'dropdown-label'}>
                        <i className={icon} style={iconStyle}></i>
                    </a>
                    <div className={'dropdown-content'} style={contentStyle}>
                        {this.props.children}
                    </div>
                </li>
            )

        } else if ( !icon && label ) {

            return (
                <li className={'dropdown'} style={dropdownStyle} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <a className={'dropdown-label'} style={labelStyle}>
                        {label}
                    </a>
                    <div className={'dropdown-content'} style={contentStyle}>
                        {this.props.children}
                    </div>
                </li>
            )

        } else {

            return (
                <li className={'dropdown'} style={dropdownStyle} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <a className={'dropdown-label'} style={labelStyle}></a>
                    <div className={'dropdown-content'} style={contentStyle}>
                        {this.props.children}
                    </div>
                </li>
            )

        }

    }
}

export { TDropDownMenu }
