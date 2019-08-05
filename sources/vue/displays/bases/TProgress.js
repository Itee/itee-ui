/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Vue from 'vue'

export default Vue.component( 'TProgress', {

    template: `
        <div class="progress" :style="computeProgressStyle">
            <div v-if="showLabel" class="progress-bar" role="progressbar" :style="computeProgressBarStyle" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{{computeLabel}}</div>
            <div v-else class="progress-bar" role="progressbar" :style="computeProgressBarStyle" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    `,

    props: {
        orientation: {
            type:    String,
            default: 'horizontal'
        },
        thickness: {
            type:    Number,
            default: 15
        },
        state: {
            type:    String,
            default: 'info'
        },
        done: {
            type:    Number,
            default: 0
        },
        todo: {
            type:    Number,
            default: 100
        },
        reverse: {
            type:    Boolean,
            default: false
        },
        showLabel: {
            type:    Boolean,
            default: true
        },
        isVisible: {
            type:    Boolean,
            default: true
        }
    },

    computed: {

        _progress () {

            return Math.ceil( ( this.done / this.todo ) * 100 )

        },

        computeProgressStyle () {

            let style = ''

            if ( this.orientation === 'vertical' ) {

                style += `width: ${this.thickness}px;`

                if ( this.reverse ) {
                    style += 'flex-direction: column-reverse;'
                }

            } else {

                style += `height: ${this.thickness}px;`

                if ( this.reverse ) {
                    style += 'flex-direction: row-reverse;'
                }

            }

            style += ( this.isVisible ) ? 'display:flex;' : 'display:none;'

            return style

        },

        computeProgressBarStyle () {

            const progress = this._progress
            let style      = ''

            if ( this.orientation === 'vertical' ) {
                style += `height: ${progress}%; width: ${this.thickness}px;`
            } else {
                style += `width: ${progress}%; height: ${this.thickness}px;`
            }

            return style

        },

        computeLabel () {

            return `${this._progress}%`

        }

    }

} )
