/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Vue      from 'vue'
import VueColor from '../../../../node_modules/vue-color/dist/vue-color'

export default Vue.component( 'TInputColor2', {
    components: {
        'chrome-picker': VueColor.Chrome
    },
    template: `
    	<div class="form-group">


	        <div class="input-group color-picker" ref="colorpicker">

    			<label class="control-label">{{label}}</label>
				<input v-if="displayTextInput === 'true'" type="text" class="form-control" v-model="colorValue" @focus="showPicker()" @input="updateFromInput" />

				<span class="input-group-addon color-picker-container">
					<span class="current-color" :style="'background-color: ' + colorValue" @click="togglePicker()"></span>
					<chrome-picker :value="colors" @input="updateFromPicker" v-if="displayPicker" />
				</span>

			</div>
		</div>
    `,
    props: [ 'label', 'color', 'displayTextInput', 'onChange' ],
    data () {

        return {
            colors: {
                hex: this.color
            },
            colorValue:    this.color,
            displayPicker: false
        }

    },
    mounted () {
        this.setColor( this.color || '#000000' )
    },
    methods: {

        setColor ( color ) {

            this.updateColors( color )
            this.colorValue = color

        },

        updateColors ( color ) {

            if ( color.slice( 0, 1 ) == '#' ) {
                this.colors = {
                    hex: color
                }
            } else if ( color.slice( 0, 4 ) == 'rgba' ) {
                var rgba    = color.replace( /^rgba?\(|\s+|\)$/g, '' ).split( ',' ),
                    hex     = '#' + ( ( 1 << 24 ) + ( parseInt( rgba[ 0 ] ) << 16 ) + ( parseInt( rgba[ 1 ] ) << 8 ) + parseInt( rgba[ 2 ] ) ).toString( 16 ).slice( 1 )
                this.colors = {
                    hex: hex,
                    a:   rgba[ 3 ]
                }
            }

            this.onChange( this.colors.hex )

        },

        showPicker () {

            document.addEventListener( 'click', this.documentClick )
            this.displayPicker = true

        },

        hidePicker () {

            document.removeEventListener( 'click', this.documentClick )
            this.displayPicker = false

        },

        togglePicker () {
            this.displayPicker ? this.hidePicker() : this.showPicker()
        },

        updateFromInput () {
            this.updateColors( this.colorValue )
        },

        updateFromPicker ( color ) {

            this.colors = color
            if ( color.rgba.a == 1 ) {
                this.colorValue = color.hex
            } else {
                this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')'
            }
        },

        documentClick ( e ) {

            let el     = this.$refs.colorpicker
            let target = e.target

            if ( el !== target && !el.contains( target ) ) {
                this.hidePicker()
            }

        }
    },
    watch: {

        colorValue ( val ) {
            if ( val ) {
                this.updateColors( val )
                this.$emit( 'input', val )
            }
        }

    }
} )

