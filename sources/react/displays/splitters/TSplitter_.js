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

class TSplitter extends React.Component {

    constructor ( props ) {

        super( props )

        this.state = {
            isVertical:            true,
            onTracking:            false,
            initialMousePositionX: 0,
            initialMousePositionY: 0,
            position:              ( props.initPosition ) ? props.initPosition : 50
        }

        this.onMouseDownHandler = this.onMouseDownHandler.bind( this )
        this.onMouseMoveHandler = this.onMouseMoveHandler.bind( this )
        this.onMouseUpHandler   = this.onMouseUpHandler.bind( this )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    onMouseDownHandler ( event ) {

        this.setState( {
            onTracking:            true,
            initialMousePositionX: event.clientX,
            initialMousePositionY: event.clientY
        } )

        event.preventDefault()

    }

    onMouseMoveHandler ( event ) {

        if ( !this.state.onTracking ) {
            return
        }

        const splitterElement = document.getElementById( 'tSplitterId' )

        let position = 0
        if ( this.state.isVertical ) {
            position = ( 100 * ( event.clientX - splitterElement.offsetLeft ) ) / splitterElement.clientWidth
        } else {
            position = ( 100 * ( event.clientY - splitterElement.offsetTop ) ) / splitterElement.clientHeight
        }

        this.setState( { position: position } )

        event.preventDefault()

    }

    onMouseUpHandler ( event ) {

        this.setState( { onTracking: false } )

        event.preventDefault()

    }

    render () {

        const { first, second } = this.props

        const leftWidth  = this.state.position
        const rightWidth = 100 - leftWidth

        if ( this.state.isVertical ) {

            const splitterStyle = {
                display: 'flex',
                width:   '100%'
            }

            const leftStyle = {
                width: leftWidth + '%'
            }

            const rightStyle = {
                width: rightWidth + '%'
            }

            const separatorStyle = {
                minWidth: '1px',
                cursor:   'col-resize'
            }

            return (
                <div id={'tSplitterId'} className={'tSplitter'} style={splitterStyle} onMouseMove={this.onMouseMoveHandler} onMouseUp={this.onMouseUpHandler} onMouseLeave={this.onMouseUpHandler}>
                    <div id={'tLeftSplit'} className={'tSplit tLeftSplit'} style={leftStyle}>
                        {first}
                    </div>
                    <div className={'tSplitterSeparator'} style={separatorStyle} onMouseDown={this.onMouseDownHandler}></div>
                    <div id={'tRightSplit'} className={'tSplit tRightSplit'} style={rightStyle}>
                        {second}
                    </div>
                </div>
            )

        } else {

            const splitterStyle = {
                display:  'flex',
                flexFlow: 'column',
                width:    '100%'
            }

            const leftStyle = {
                height: leftWidth + '%',
                width:  '100%'
            }

            const rightStyle = {
                height: rightWidth + '%',
                width:  '100%'
            }

            const separatorStyle = {
                minHeight: '1px',
                cursor:    'row-resize',
                width:     '100%'
            }

            return (
                <div id={'tSplitterId'} className={'tSplitter'} style={splitterStyle} onMouseMove={this.onMouseMoveHandler} onMouseUp={this.onMouseUpHandler} onMouseLeave={this.onMouseUpHandler}>
                    <div id={'tLeftSplit'} className={'tSplit tLeftSplit'} style={leftStyle}>
                        {first}
                    </div>
                    <div className={'tSplitterSeparator'} style={separatorStyle} onMouseDown={this.onMouseDownHandler}></div>
                    <div id={'tRightSplit'} className={'tSplit tRightSplit'} style={rightStyle}>
                        {second}
                    </div>
                </div>
            )

        }

    }

}

export { TSplitter }
