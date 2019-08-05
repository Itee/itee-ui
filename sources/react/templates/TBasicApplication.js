/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/* eslint-env browser */

import React         from 'react'
import { TToolBar }  from '../displays/bars/_bars'
import { TDateTime } from '../displays/bases/_bases'
import {
    TBrand,
    TDropDownMenu
}                    from '../displays/navigations/_navigations'
import {
    TLogingButton,
    TToolButton
}                    from '../inputs/buttons/_buttons'
import {
    TDialogArea,
    TLoginDialog
}                    from '../interactives/dialogs/_dialogs'

class TBasicApplication extends React.Component {

    constructor ( props ) {

        super( props )

        this.state = {
            underDialog:     false,
            showLoginDialog: false,
            isLogged:        false
        }

        this.logInButtonHandler  = this.logInButtonHandler.bind( this )
        this.logOutButtonHandler = this.logOutButtonHandler.bind( this )
        this.loginCloseHandler   = this.loginCloseHandler.bind( this )
        this.loginSubmitHandler  = this.loginSubmitHandler.bind( this )

    }

    /**
     * Component lifecycle
     */

    componentWillMount () {}

    componentWillReceiveProps ( /*nextProps*/ ) {}

    componentWillUpdate ( /*nextProps, nextState*/ ) {}

    componentDidMount () {}

    //    shouldComponentUpdate ( /*nextProps, nextState*/ ) {}

    componentWillUnmount () {}

    componentDidUpdate ( /*prevProps, prevState*/ ) {}

    /**
     * Component Handlers
     */

    logInButtonHandler () {

        if ( !this.state.isLogged ) {

            this.setState( {
                underDialog:     true,
                showLoginDialog: true
            } )

        }

    }

    logOutButtonHandler () {

        if ( this.state.isLogged ) {

            this.setState( prevState => ( {
                isLogged: !prevState.isLogged
            } ) )

        }

    }

    loginCloseHandler () {

        this.setState( {
            underDialog:     false,
            showLoginDialog: false
        } )

    }

    loginSubmitHandler ( event ) {

        //Todo: wait server response
        this.setState( prevState => ( {
            isLogged:        !prevState.isLogged,
            underDialog:     false,
            showLoginDialog: false
        } ) )

        event.preventDefault()

    }

    /**
     * Component Methods
     */

    /**
     * Component Rendering
     */

    render () {

        const { id, className, children } = this.props

        const _id    = id || `tApplicationId`
        const _style = {
            display:  'flex',
            flexFlow: 'column',
            height:   '100%'
        }
        const _class = className || 'tApplication'

        return (
            <t-application id={_id} style={_style} class={_class}>
                {children}
            </t-application>
        )

    }

}

export { TBasicApplication }
