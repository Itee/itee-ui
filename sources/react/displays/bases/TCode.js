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

let _instanceCounter = 0

class TCode extends React.Component {

    static componentDidCatch ( error, info ) {

        console.error( error )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    shouldComponentUpdate ( nextProps, nextState ) {}

    constructor ( props ) {

        super( props )
        _instanceCounter++

    }

    /**
     * React lifecycle
     */
    componentWillMount () {}

    componentWillReceiveProps ( nextProps ) {}

    componentWillUpdate ( nextProps, nextState ) {}

    componentDidUpdate ( prevProps, prevState ) {}

    render () {

        const { id, className } = this.props

        const _id    = id || `tCode_${_instanceCounter}`
        const _style = {}
        const _class = ( className ) ? `tCode ${className}` : 'tCode'

        return (
            <t-code ref={( container ) => {this._container = container}} id={_id} style={_style} className={_class}></t-code>
        )

    }

}

export { TCode }
