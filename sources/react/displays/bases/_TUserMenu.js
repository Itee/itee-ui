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

class TUserMenu extends React.Component {

    constructor ( props ) {

        super( props )

        this.state = {
            isToggled: false
        }

        this.toggleHandler = this.toggleHandler.bind( this )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    toggleHandler () {

        this.setState( prevState => ( {
            isToggled: !prevState.isToggled
        } ) )

    }

    render () {

        const { logOutHandler } = this.props

        const iconStyle = {
            fontSize:    '3.2em',
            marginRight: '11px'
        }

        if ( this.state.isToggled ) {

            return (
                <div>
                    <i className={'fa fa-user-circle-o'} style={iconStyle} onClick={this.toggleHandler}></i>
                    <TDropDownMenu icon={'fa fa-user-circle-o'} align={'right'}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 1</a>
                        <a href="#">Link 1</a>
                        <a onClick={logOutHandler}>Déconnexion</a>
                    </TDropDownMenu>
                </div>
            )

        } else {

            return (
                <i className={'fa fa-user-circle-o'} style={iconStyle} onClick={this.toggleHandler}></i>
            )

        }

    }

}

export { TUserMenu }
