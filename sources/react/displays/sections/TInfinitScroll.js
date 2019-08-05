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

class TInfinitScroll extends React.Component {

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

        const _id    = id || `tInfinitScroll_${_instanceCounter}`
        const _style = {}
        const _class = ( className ) ? `tInfinitScroll ${className}` : 'tInfinitScroll'

        return (
            <t-infinit-scroll ref={( container ) => {this._container = container}} id={_id} style={_style} className={_class}></t-infinit-scroll>
        )

    }

}

export { TInfinitScroll }
