/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/* global Itee */

window.TConfigParameters = {
    el:   '#root',
    data: {
        viewport: {
            scene:           new Itee.Scene(),
            camera:          'perspective',
            renderer:        new Itee.WebGLRenderer( { antialias: true } ),
            backgroundColor: 0x123456,
            control:         'orbital'
        },
        treeItems: []
    },
    template: `
        <TContainer orientation="vertical" hAlign="stretch" vAlign="start" expand=true>
                   
            <THeader>
                <TAppBar height="60px">
                    <TContainer vAlign="center" hAlign="start">
                        <TLabel class="tBrand" label="ITEE" icon="rocket" />
                    </TContainer>
                    <TMenu>
                        <TMenuItem label="Home" :onClickHandler=alertFooBar />
                        <TMenuItem label="Documentation" />
                        <TMenuItem label="Téléversement" />
                        <TMenuDropDown popAt="bottom" label="Tutoriel">
                            <TMenuItem label="SubMenuA" :onClickHandler=alertFooBar />
                            <TMenuItem label="SubMenuB" :onClickHandler=alertFooBar />
                            <TMenuDropDown popAt="rightUp" label="SubDropDown">
                                <TMenuItem label="SubSubMenuA" :onClickHandler=alertFooBar />
                                <TMenuItem label="SubSubMenuB" :onClickHandler=alertFooBar />
                                <TMenuItem label="SubSubMenuC" :onClickHandler=alertFooBar />
                                <TMenuDropDown popAt="rightUp" label="SubSubDropDown">
                                    <TMenuItem label="FarAwayMenuA" :onClickHandler=alertFooBar />
                                    <TMenuItem label="FarAwayMenuB" :onClickHandler=alertFooBar />
                                    <TMenuItem label="FarAwayMenuC" :onClickHandler=alertFooBar />
                                    <TMenuItem label="FarAwayMenuD" :onClickHandler=alertFooBar />
                                    <TMenuItem label="FarAwayMenuE" :onClickHandler=alertFooBar />
                                </TMenuDropDown>
                            </TMenuDropDown>
                            <TMenuItem label="SubMenuC" :onClickHandler=alertFooBar />
                            <TMenuItem label="SubMenuD" :onClickHandler=alertFooBar />
                            <TMenuItem label="SubMenuE" :onClickHandler=alertFooBar />
                        </TMenuDropDown>
                        <TMenuItem label="A propos" :onClickHandler=alertFooBar />
                    </TMenu>
                    <TContainer vAlign="center" hAlign="end">
                        <div>loginbtn</div>
                    </TContainer>
                </TAppBar>
                <TToolBar>
                    <TToolDropDown popAt="bottomLeft" icon="crosshairs" tooltip="Outils de mesure" >
                        <TToolItem icon="mars" label="Segment" tooltip="Prendre une distance entre un point A et un point B" :onClick=setMesureModeOfType onClickData="segment" />
                        <TToolItem icon="share-alt" label="PolyLigne" tooltip="Prendre des distances entre plusieurs points qui se suivent" :onClick=setMesureModeOfType onClickData="polyline" />
                        <TToolItem :icon="['fab', 'hubspot']" label="PolySegment" tooltip="Prendre des distances entre un point central et plusieurs points" :onClick=setMesureModeOfType onClickData="polysegment" />
                        <TDivider orientation="horizontal" />
                        <TToolItem class="disabled" icon="circle" label="Disque" tooltip="Prendre des mesures de type circulaire" :onClick=setMesureModeOfType onClickData="disk" />
                        <TToolItem class="disabled" icon="square" label="Carré" tooltip="Prendre des mesures de type rectangulaire" :onClick=setMesureModeOfType onClickData="square" />
                        <TToolItem class="disabled" icon="star" label="Polygone" tooltip="Prendre des mesures de type polygonale" :onClick=setMesureModeOfType onClickData="polygone" />
                        <TDivider orientation="horizontal" />
                        <TToolItem class="disabled" :icon="['fab', 'dribbble']" label="Sphère" tooltip="Volume sphèrique" :onClick=setMesureModeOfType onClickData="sphere" />
                        <TToolItem class="disabled" icon="cube" label="Cube" tooltip="Volume cubique" :onClick=setMesureModeOfType onClickData="cube" />
                    </TToolDropDown>
                    <TToolItem icon="wifi" tooltip="Rayon X" :onClick=alertFooBar />
                    <TToolItem icon="cut" tooltip="Outil de découpe" :onClick=alertFooBar />
                    <TToolItem icon="hand-pointer" tooltip="Sélection" :onClick=alertFooBar />

                    <TDivider orientation="vertical" />

                    <TToolDropDown popAt="bottomLeft" tooltip="Choisir le type de projection de la camera" icon="camera">
                        <TToolItem icon="cubes" label="Orthographique" :onClick=setCameraOfType onClickData="orthographic" />
                        <TToolItem :icon="['fab', 'linode']" label="Perspective" :onClick=setCameraOfType onClickData="perspective" />
                    </TToolDropDown>
                    <TToolDropDown popAt="bottomLeft" tooltip="Choisir le type de contrôle de caméra" icon="gamepad">
                        <TToolItem icon="globe" label="Orbital" tooltip="Permet de se déplacer en mode orbital autour du model 3D" :onClick=setControlOfType onClickData="orbital" />
                        <TToolItem icon="street-view" label="Avatar" tooltip="Permet de se déplacer en mode immersif dans le model 3D" :onClick=setControlOfType onClickData="avatar" />
                    </TToolDropDown>
                    <TToolDropDown popAt="bottomLeft" tooltip="Choisir un effet de camera" icon="eye">
                        <TToolItem icon="globe" label="Normal" tooltip="Vision de base" :onClick=setEffectOfType onClickData="normal" />
                        <TToolItem :icon="['fab', 'nintendo-switch']" label="Anaglyphe" tooltip="Anaglyphe" :onClick=setEffectOfType onClickData="anaglyph" />
                        <TToolItem :icon="{icon:['fab', 'simplybuilt'], flip: 'vertical'}" label="VR" tooltip="VR" :onClick=setEffectOfType onClickData="vr" />
                    </TToolDropDown>

                    <TDivider orientation="vertical" />

                    <TToolItem icon="cloud" :onClick=alertFooBar />
                    <TToolDropDown popAt="bottomLeft" icon="th">
                        <TToolItem label="Plan XY" :onClick=addCube />
                        <TToolItem label="Plan XZ" :onClick=alertFooBar />
                        <TToolItem label="Plan YZ" :onClick=alertFooBar />
                    </TToolDropDown>

                </TToolBar>
            </THeader>

            <TContent>
                <TSplitter :isVertical=true :initPosition=20>
                    <TTree slot="left" :items="viewport.scene.children" :filter=filterTreeItem></TTree>
                    <TViewport3D slot="right" 
                        :scene=viewport.scene 
                        :camera=viewport.camera
                        :control=viewport.control
                        :renderer=viewport.renderer
                        :backgroundColor=0x232323
                     />
                </TSplitter>
            </TContent>

            <TFooter>
                Footer
            </TFooter>
                
        </TContainer>
    `,
    methods: {

        setCameraOfType ( cameraType ) {
            'use strict'

            this.viewport.camera = cameraType

        },

        setControlOfType ( controlType ) {
            'use strict'

            this.viewport.control = controlType

        },

        setEffectOfType ( /*effectType*/ ) {
            'use strict'

        },

        setMesureModeOfType ( /*effectType*/ ) {
            'use strict'

        },

        alertFooBar () {
            'use strict'
            alert( 'foo bar' )
        },

        addCube () {
            'use strict'

            const mainGroup     = new Itee.Group()
            mainGroup.name      = 'MainGroup'
            mainGroup.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( mainGroup )
                }
            ]
            this.viewport.scene.add( mainGroup )

            const group     = new Itee.Group()
            group.name      = 'MyGroup'
            group.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( group )
                },
                {
                    type:     'range',
                    onChange: function onChangeHandler ( changeEvent ) {

                        const opacity  = changeEvent.target.valueAsNumber / 100
                        const children = group.children

                        let child = undefined
                        for ( let childIndex = 0, numberOfChildren = children.length ; childIndex < numberOfChildren ; childIndex++ ) {
                            child = children[ childIndex ]

                            if ( !child.material.transparent ) {
                                child.material.transparent = true
                            }
                            child.material.opacity = opacity

                        }

                    }
                }
            ]
            mainGroup.add( group )

            const gridHelperXZ_10     = new Itee.GridHelper( 20, 20 )
            gridHelperXZ_10.name      = 'gridHelperXZ_10'
            gridHelperXZ_10.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( gridHelperXZ_10 )
                }
            ]
            group.add( gridHelperXZ_10 )

            const gridHelperXZ_100     = new Itee.GridHelper( 200, 20 )
            gridHelperXZ_100.name      = 'gridHelperXZ'
            gridHelperXZ_100.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( gridHelperXZ_100 )
                }
            ]
            group.add( gridHelperXZ_100 )

            const gridHelperXZ_1000     = new Itee.GridHelper( 2000, 20 )
            gridHelperXZ_1000.name      = 'gridHelperXZ_10'
            gridHelperXZ_1000.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( gridHelperXZ_1000 )
                }
            ]
            group.add( gridHelperXZ_1000 )

            // ----

            const cubeGroup     = new Itee.Group()
            cubeGroup.name      = 'Cubes'
            cubeGroup.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( cubeGroup )
                }
            ]
            mainGroup.add( cubeGroup )

            const geometry   = new Itee.BoxBufferGeometry( 1, 1, 1 )
            const material   = new Itee.MeshPhongMaterial( 0x0096FF )
            const tCube1     = new Itee.Mesh( geometry, material )
            tCube1.name      = 'tCube1'
            tCube1.modifiers = [
                {
                    type:    'checkbox',
                    value:   'checked',
                    onClick: this.toggleVisibilityOf( tCube1 )
                },
                {
                    type:     'range',
                    onChange: function onChangeHandler ( changeEvent ) {

                        const opacity = changeEvent.target.valueAsNumber / 100

                        if ( !tCube1.material.transparent ) {
                            tCube1.material.transparent = true
                        }

                        tCube1.material.opacity = opacity

                    }
                }
            ]
            cubeGroup.add( tCube1 )

        },

        addTreeItem () {
            'use strict'

            //            if( !parent.children ) {
            //                parent.children = []
            //            }

            this.treeItems.push( {
                id:        'quxId',
                name:      'quxName',
                isChecked: false,
                modifiers: [
                    {
                        type:    'button',
                        value:   'Add',
                        onClick: this.addTreeItem
                    },
                    {
                        type:    'button',
                        value:   'Remove',
                        onClick: this.removeTreeItem
                    }
                ]
            } )

        },
        removeTreeItem ( /*parent*/ ) {
            'use strict'
            console.log( 'remove item' )
        },
        filterTreeItem ( item ) {
            'use strict'

            return item.name.length > 3

        },
        toggleVisibilityOf ( object ) {
            'use strict'

            const _object = object

            return function toggleVisibility () {
                _object.visible = !_object.visible
            }

        }
    }
}
