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

class TTreeItem extends React.Component {

    constructor ( props ) {

        super( props )

    }

    componentDidMount () {}

    componentWillUnmount () {}

    render () {

        const { id, name, isChecked, children } = this.props

        const _STYLE = {}

        return (
            <li id={id} className={'tTreeItem'}>
                <input type={'checkbox'} id={`${id}ExpandCheckbox`} />
                <label>
                    <input type={'checkbox'} id={`${id}VisibilityCheckbox`} checked={isChecked} />
                    <span></span>
                </label>
                <label htmlFor={`${id}ExpandCheckbox`}>{name}</label>
                <ul className={'children'}>
                    {children}
                </ul>
            </li>
        )

    }

}

export { TTreeItem }


