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

import { TUserMenu }     from '../data_displays/TUserMenu'
import { TDropDownMenu } from '../navigations/TDropDownMenu'

class TLogingButton extends React.Component {

    constructor ( props ) {

        super( props )

    }

    render () {

        const { isLogged, label, round, logInHandler, logOutHandler } = this.props

        console.log( 'TLogingButton.render' )

        if ( isLogged ) {

            const logginStyle = {
                padding:         '10px',
                color:           'white',
                backgroundColor: '#0088ff',
                textDecoration:  'none',
                borderRadius:    '50%'
            }

            const iconStyle = {
                fontSize:    '3.2em',
                marginRight: '11px'
            }

            return (
                <TDropDownMenu icon={'fa fa-user-circle-o'} align={'right'}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 1</a>
                    <a href="#">Link 1</a>
                    <a onClick={logOutHandler}>Déconnexion</a>
                </TDropDownMenu>
                //                <TUserMenu logOutHandler={logOutHandler} />
            )

        } else {

            if ( round ) {

                const logginStyle = {
                    fontSize:        '1.6em',
                    padding:         '10px',
                    color:           'white',
                    marginRight:     '10px',
                    backgroundColor: '#0088ff',
                    textDecoration:  'none',
                    borderRadius:    '50%'
                }

                const iconStyle = {
                    width:      '23px',
                    height:     '23px',
                    marginLeft: '3px'
                }

                return (
                    <a className={'logginBtn'} style={logginStyle} onClick={logInHandler}>
                        <i className={'fa fa-key fa-flip-vertical'} style={iconStyle}></i>
                    </a>
                )

            } else {

                const logginStyle = {
                    fontSize:        '1.6em',
                    padding:         '8px',
                    color:           'white',
                    marginRight:     '10px',
                    backgroundColor: '#0088ff',
                    textDecoration:  'none'
                }

                return (
                    <a className={'logginBtn'} style={logginStyle} onClick={logInHandler}>
                        <i className={'fa fa-key fa-flip-vertical'}></i>
                        {label}
                    </a>
                )

            }

        }

    }
}

export { TLogingButton }
