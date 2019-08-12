/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

window.TConfigParameters = {
    el:   '#root',
    data: {
        debug:     true,
        container: {
            orientation: 'horizontal',
            wrapContent: true,
            vAlign:      'start',
            hAlign:      'start',
            wAlign:      'start',
            expand:      false,
            items:       []
        }
    },
    template: `
<TContainer orientation=vertical vAlign="start" hAlign="stretch" expand=true>

    <TItemList :wrapContent=container.wrapContent :orientation=container.orientation :vAlign=container.vAlign :hAlign=container.hAlign :wAlign=container.wAlign :expand=container.expand :items=container.items></TItemList>
	
	<div class="affix">
		<div>
			<TButton label="Add Red" :onClick=addItem messageData="red"></TButton>
			<TButton label="Add Green" :onClick=addItem messageData="green"></TButton>
			<TButton label="Add Blue" :onClick=addItem messageData="blue"></TButton>
			<TButton label="Remove last" :onClick=removeItem></TButton>
		</div>
		<div>
			<TButton label="Wrap" :onClick=toggleWraping></TButton>
			<TButton label="Expand" :onClick=toggleExpand></TButton>
		</div>
		<div>
			<TButton label="vertical" :onClick=setOrientation messageData="vertical"></TButton>
			<TButton label="horizontal" :onClick=setOrientation messageData="horizontal"></TButton>
		</div>
		<div>
			<TButton label="vAlign.start" :onClick=setVAlign messageData="start"></TButton>
			<TButton label="vAlign.end" :onClick=setVAlign messageData="end"></TButton>
			<TButton label="vAlign.center" :onClick=setVAlign messageData="center"></TButton>
			<TButton label="vAlign.spaced" :onClick=setVAlign messageData="spaced"></TButton>
			<TButton label="vAlign.justified" :onClick=setVAlign messageData="justified"></TButton>
			<TButton label="vAlign.stretch" :onClick=setVAlign messageData="stretch"></TButton>
			<TButton label="vAlign.baseline" :onClick=setVAlign messageData="baseline"></TButton>
		</div>
		<div>
			<TButton label="hAlign.start" :onClick=setHAlign messageData="start"></TButton>
			<TButton label="hAlign.end" :onClick=setHAlign messageData="end"></TButton>
			<TButton label="hAlign.center" :onClick=setHAlign messageData="center"></TButton>
			<TButton label="hAlign.spaced" :onClick=setHAlign messageData="spaced"></TButton>
			<TButton label="hAlign.justified" :onClick=setHAlign messageData="justified"></TButton>
			<TButton label="hAlign.stretch" :onClick=setHAlign messageData="stretch"></TButton>
			<TButton label="hAlign.baseline" :onClick=setHAlign messageData="baseline"></TButton>
		</div>
		<div>
			<TButton label="wAlign.start" :onClick=setWAlign messageData="start"></TButton>
			<TButton label="wAlign.end" :onClick=setWAlign messageData="end"></TButton>
			<TButton label="wAlign.center" :onClick=setWAlign messageData="center"></TButton>
			<TButton label="wAlign.spaced" :onClick=setWAlign messageData="spaced"></TButton>
			<TButton label="wAlign.justified" :onClick=setWAlign messageData="justified"></TButton>
			<TButton label="wAlign.stretch" :onClick=setWAlign messageData="stretch"></TButton>
		</div>
	</div>
	
</TContainer>`,
    methods: {
        addItem ( color ) {
            'use strict'

            let item = {}

            if ( color === 'red' ) {

                item = {
                    class: 'item itemRed',
                    label: 'labelRed'
                }

            } else if ( color === 'green' ) {

                item = {
                    class: 'item itemGreen',
                    label: 'labelGreen'
                }

            } else if ( color === 'blue' ) {

                item = {
                    class: 'item itemBlue',
                    label: 'labelBlue'
                }

            } else {

                item = {
                    class: 'item itemDefault',
                    label: 'labelDefault'
                }

            }

            this.container.items.push( item )

        },
        removeItem () {
            'use strict'

            this.container.items = this.container.items.slice( 1 )

        },
        toggleWraping () {
            'use strict'

            this.container.wrapContent = !this.container.wrapContent

            if(this.container.wrapContent === false) {
                this.container.wAlign = null
            }

        },
        toggleExpand () {
            'use strict'

            this.container.expand = !this.container.expand

        },
        setOrientation ( orientation ) {
            'use strict'

            this.container.orientation = orientation

        },
        setVAlign ( vAlign ) {
            'use strict'
            this.container.vAlign = vAlign
        },
        setHAlign ( hAlign ) {
            'use strict'
            this.container.hAlign = hAlign
        },
        setWAlign ( wAlign ) {
            'use strict'
            this.container.wAlign = wAlign
        }
    }
}
