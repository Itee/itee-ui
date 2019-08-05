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

class TDateTime extends React.Component {

    constructor ( props ) {

        super( props )

        this.state = {
            date: new Date()
        }

        this._timerID = undefined
    }

    componentDidMount () {

        this._timerID = setInterval(
            () => this.tick(),
            this.props.refreshInterval
        )

    }

    componentWillUnmount () {

        clearInterval( this._timerID )

    }

    tick () {

        this.setState( {
            date: new Date()
        } )

    }

    render () {

        const props    = this.props
        const { date } = this.state

        const dateTimeStyle = {
            color: 'white'
        }

        return (
            <span style={dateTimeStyle}>{date.toLocaleTimeString()}</span>
        )

    }

}

TDateTime.defaultProps = {
    refreshInterval: 1000
}

export { TDateTime }
