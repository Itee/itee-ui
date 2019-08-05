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

import { TCenteredContainer } from '../layouts/TCenteredContainer'
import { TContent }           from '../layouts/TContent'
import { TFooter }            from '../layouts/TFooter'

import { THeader } from '../layouts/THeader'

class TLoginDialog extends React.Component {

    constructor ( props ) {

        super( props )
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind( this )
        //        this.handleSubmit = this.handleSubmit.bind( this )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    handleChange ( event ) {

        this.setState( { value: event.target.value } )

    }

    //    handleSubmit(event) {
    //        alert('A name was submitted: ' + this.state.value);
    //        event.preventDefault();
    //    }

    render () {

        const { isVisible, submitHandler, closeHandler } = this.props

        const _STYLE = {
            display:       ( isVisible ) ? 'flex' : 'none',
            alignItems:    'center',
            flexDirection: 'column'
        }

        return (
            <form className={'dialog login-dialog'} style={_STYLE} onSubmit={submitHandler}>
                {/*<form className={'dialog login-dialog'} style={_STYLE} onSubmit={this.handleSubmit}>*/}

                <THeader>
                    <TCenteredContainer>
                        <span>Connection</span>
                    </TCenteredContainer>
                </THeader>

                <TContent>
                    <vertical-layout style={{
                        display:       'flex',
                        flexDirection: 'column'
                    }}>
                        <i className={'fa fa-user-circle-o'}></i>

                        <label>Username</label>
                        <input type={'text'} placeholder={'Enter Username'} name={'userName'} required />

                        <label>Password</label>
                        <input type={'password'} placeholder={'Enter Password'} name={'password'} required />
                        <span className={'psw'}><a href={'#'}>Forgot password ?</a></span>
                    </vertical-layout>
                </TContent>

                <TFooter>
                    <div style={{
                        display: 'flex',
                        height:  '100%'
                    }}>
                        <button type={'button'} onClick={closeHandler} className={'cancel-btn btn-danger'}>Cancel</button>
                        <button type={'submit'} value={'Submit'}>Login</button>
                    </div>
                </TFooter>

            </form>
        )

    }

}

export { TLoginDialog }

