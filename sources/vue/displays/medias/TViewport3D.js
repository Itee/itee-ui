/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { Clock }                                   from 'three-full'
import Vue                          from 'vue'
import { default as Stats }         from '../../../../node_modules/stats.js/src/Stats'

export default Vue.component( 'TViewport3D', {

    template: `<div class="tViewport3D" @click.left="_select" @click.right="_deselect" tabindex="-1"><slot></slot></div>`,

    props: [
        'width',
        'height',
        'scene',
        'camera',
        'control',
        'effect',
        'renderer',
        'showStats',
        'autoUpdate',
        'backgroundColor',
        'enableShadow',
        'isRaycastable',
        'allowDecimate',
        'needResize',
        'needUpdate',
        'needCacheUpdate'
    ],

    data () {

        return {
            frameId:         null,
            resizeTimeoutId: null,
            timer:           new Clock( true ),
            stats:           new Stats()
        }

    },

//    watch: {
//
////        control ( newControl, oldControl ) {
////
////            this._setControl( newControl, oldControl )
////
////        },
////
////        effect ( newEffect, oldEffect ) {
////
////            this._setEffect( newEffect, oldEffect )
////
////        },
////
////        renderer ( newRenderer, oldRenderer ) {
////
////            this._setRenderer( newRenderer, oldRenderer )
////
////        },
////
////        autoUpdate ( autoUpdate/*, oldAutoUpdate*/ ) {
////
////            if ( autoUpdate ) {
////                this._startLoop()
////            } else {
////                this._stopLoop()
////            }
////
////        },
////
////        needUpdate ( /*newValue, oldValue*/ ) {
////
////            this._updateViewport()
////
////        },
//
////        backgroundColor ( newBg/*, oldBg*/ ) {
////
////            this.renderer.setClearColor( newBg || 0x000000 )
////
////        },
//
////        showStats ( newValue/*, oldValue*/ ) {
////
////            this.stats.domElement.style.display = ( newValue ) ? 'block' : 'none'
////
////        },
////
////        needResize ( newValue/*, oldValue*/ ) {
////
////            if ( newValue === true ) {
////                this._resize( this.$el )
////            }
////
////        },
////
////        allowDecimate ( newValue/*, oldValue*/ ) {
////
////            if ( newValue ) {
////                this._decimateVisibleMeshes()
////            } else {
////                this._populateVisibleMeshes()
////            }
////
////        }
//
//    },
//
//    methods: {
//
//        // Setters
//
////        _setEffect ( newEffect, oldEffect ) {
////
////            if ( oldEffect && newEffect === oldEffect ) { return }
////
////            this.effect = newEffect
////
////            this._resize()
////
////        },
//
////        _setRenderer ( newRenderer, oldRenderer ) {
////
////            if ( oldRenderer && newRenderer === oldRenderer ) { return }
////
////            // Add renderer canvas
////            this.renderer.domElement.style.display = 'block'
////            this.$el.appendChild( this.renderer.domElement )
////
////        },
//
//        // Resize
//
////        _resize () {
////
////            this._resizeCamera( 1, 1 )
////            this._resizeControl( 1, 1 )
////            this._resizeEffect( 1, 1 )
////            this._resizeRenderer( 1, 1 )
////
////            if ( this.resizeTimeoutId ) {
////                clearTimeout( this.resizeTimeoutId )
////            }
////
////            this.resizeTimeoutId = setTimeout( () => {
////                const containerWidth  = this.$el.offsetWidth
////                const containerHeight = this.$el.offsetHeight
////
////                this._resizeCamera( containerWidth, containerHeight )
////                this._resizeControl( containerWidth, containerHeight )
////                this._resizeEffect( containerWidth, containerHeight )
////                this._resizeRenderer( containerWidth, containerHeight )
////            }, 0 )
////
////            this.$emit( 'resized', null )
////
////        },
////        _resizeCamera ( width, height ) {
////
////            if ( !this.camera ) { return }
////
////            const aspectRatio = ( width / height )
////
////            if ( this.camera.isPerspectiveCamera ) {
////
////                this.camera.aspect = aspectRatio
////
////                this.camera.updateProjectionMatrix()
////
////            } else if ( this.camera.isOrthographicCamera ) {
////
////                const frustumSize  = 20
////                this.camera.left   = -frustumSize * aspectRatio / 2
////                this.camera.right  = frustumSize * aspectRatio / 2
////                this.camera.top    = frustumSize / 2
////                this.camera.bottom = -frustumSize / 2
////
////                this.camera.updateProjectionMatrix()
////
////            } else {
////
////                TLogger.error( `TViewport3D: Unable to resize unknown camera of type ${typeof this.camera}` )
////
////            }
////
////        },
////        _resizeControl ( width, height ) {
////
////            if ( !this.control ) { return }
////            if ( !this.control.resize ) { return }
////
////            this.control.resize( width, height )
////
////        },
////        _resizeEffect ( width, height ) {
////
////            if ( !this.effect ) { return }
////            if ( !this.effect.setSize ) { return }
////
////            this.effect.setSize( width, height )
////
////        },
////        _resizeRenderer ( width, height ) {
////
////            if ( this.effect ) { return }
////            if ( !this.renderer ) { return }
////            if ( !this.renderer.setSize ) { return }
////
////            this.renderer.setSize( width, height )
////
////        },
//
////        // Render loop
////
////        _startLoop () {
////
////            if ( this.frameId ) {
////                return
////            }
////
////            this.frameId = window.requestAnimationFrame( this._loop.bind( this ) )
////
////        },
////        _loop () {
////
////            if ( this.stats && this.showStats ) {
////                this.stats.begin()
////            }
////
////            this.frameId = window.requestAnimationFrame( this._loop.bind( this ) )
////
////            this._updateViewport()
////
////            if ( this.stats && this.showStats ) {
////                this.stats.end()
////            }
////
////        },
////        _stopLoop () {
////
////            window.cancelAnimationFrame( this.frameId )
////            this.frameId = null
////
////        },
////
////        _updateViewport () {
////
////            this._updateCamera()
////            this._updateControl()
////            this._updateEffect()
////            this._updateRenderer()
////
////        },
////        _updateCamera () {
////
////            if ( !this.camera ) { return }
////
////            const cameraType = this.camera.type
////
////            if (
////                this.camera.isPerspectiveCamera ||
////                this.camera.isOrthographicCamera
////            ) {
////
////                // Do nothings here...
////
////            } else if ( cameraType === 'CinematicCamera' ) {
////
////                this.camera.renderCinematic( this.scene, this.renderer )
////
////            } else if ( cameraType === 'CubeCamera' ) {
////
////                this.camera.update( this.renderer, this.scene )
////
////            } else if ( cameraType === 'StereoCamera' ) {
////
////                this.camera.update( this.camera )
////
////            } else {
////
////                throw new Error( `Unmanaged camera type: ${this.camera}` )
////
////            }
////
////        },
////        _updateControl () {
////
////            if ( !this.control ) { return }
////            if ( !this.control.update ) { return }
////            if ( !this.$data ) { return }
////            if ( !this.$data.timer ) { return }
////
////            this.control.update( this.$data.timer.getDelta() )
////
////        },
////        _updateEffect () {
////
////            if ( !this.effect ) { return }
////            if ( !this.effect.render ) { return }
////
////            this.effect.render( this.scene, this.camera )
////
////        },
////        _updateRenderer () {
////
////            if ( this.effect ) { return }
////            if ( !this.renderer ) { return }
////            if ( !this.renderer.render ) { return }
////
////            const scene    = this.scene
////            const camera   = this.camera
////            const renderer = this.renderer
////
////            renderer.render( scene, camera )
////
////        },
//
//        // Utils
//
////        // Todo: dispatch mouse/keyboard events in differents methods to be handler with intersected object
////        // Todo: drag/drop altClick keymodifier
////        // Todo :allow to change keymodifier signification !!!
////
////        // Raycast if(raycastOnClick) onClick(raycast)
////        _raycast ( mouseEvent ) {
////
////            if ( !this.isRaycastable ) {
////                return
////            }
////
////            mouseEvent.preventDefault()
////
////            // calculate mouse position in normalized device coordinates
////            // (-1 to +1) for both components
////            const mousePositionX             = mouseEvent.layerX || mouseEvent.offsetX || 1
////            const mousePositionY             = mouseEvent.layerY || mouseEvent.offsetY || 1
////            const containerWidth             = this.$el.offsetWidth
////            const containerHeight            = this.$el.offsetHeight
////            const normalizedMouseCoordinates = {
////                x: ( mousePositionX / containerWidth ) * 2 - 1,
////                y: -( mousePositionY / containerHeight ) * 2 + 1
////            }
////
////            // update the picking ray with the camera and mouse position
////            this._raycaster.setFromCamera( normalizedMouseCoordinates, this.camera )
////
////            // Debug ray
////            const debugRay = false
////            if ( debugRay ) {
////
////                const origin      = this._raycaster.ray.origin
////                const direction   = this._raycaster.ray.direction
////                const arrowHelper = new ArrowHelper( direction, origin, 10, 0x123456 )
////                this.scene.add( arrowHelper )
////
////            }
////
////            // calculate objects intersecting the picking ray
////            const raycastables = this._getRaycastableCache()
////            const intersects   = this._raycaster.intersectObjects( raycastables, false )
////            if ( intersects && intersects.length > 0 ) {
////                const nearestIntersect = intersects[ 0 ]
////                this.$emit( 'intersect', nearestIntersect )
////            } else {
////                this.$emit( 'intersect', null )
////            }
////
////        },
////
////        _select ( mouseEvent ) {
////
////            if ( !this.isRaycastable ) {
////                return
////            }
////
////            mouseEvent.preventDefault()
////
////            // calculate mouse position in normalized device coordinates
////            // (-1 to +1) for both components
////            const mousePositionX             = mouseEvent.layerX || mouseEvent.offsetX || 1
////            const mousePositionY             = mouseEvent.layerY || mouseEvent.offsetY || 1
////            const containerWidth             = this.$el.offsetWidth
////            const containerHeight            = this.$el.offsetHeight
////            const normalizedMouseCoordinates = {
////                x: ( mousePositionX / containerWidth ) * 2 - 1,
////                y: -( mousePositionY / containerHeight ) * 2 + 1
////            }
////
////            // update the picking ray with the camera and mouse position
////            this._raycaster.setFromCamera( normalizedMouseCoordinates, this.camera )
////
////            // calculate objects intersecting the picking ray
////            const raycastables = this._getRaycastableCache()
////            const intersects   = this._raycaster.intersectObjects( raycastables, false )
////            if ( intersects && intersects.length > 0 ) {
////                this.$emit( 'select', intersects[ 0 ] )
////            }
////        },
////
////        _deselect ( mouseEvent ) {
////
////            if ( !this.isRaycastable ) {
////                return
////            }
////
////            mouseEvent.preventDefault()
////
////            this.$emit( 'deselect' )
////
////        },
////
////        /// Helpers
////
////        _decimateVisibleMeshes () {
////
////            if ( !this.allowDecimate ) {
////                return
////            }
////
////            // Decimate scene
////            const cache = this._getDecimateCache()
////            for ( let meshIndex = 0, numberOfMeshesToDecimate = cache.length ; meshIndex < numberOfMeshesToDecimate ; meshIndex++ ) {
////
////                cache[ meshIndex ].layers.set( 10 )
////
////            }
////
////            this.isDecimate = true
////
////        },
////
////        _populateVisibleMeshes () {
////
////            if ( this.allowDecimate ) {
////                return
////            }
////
////            const decimables = this._cache.decimables
////            for ( let meshIndex = 0, numberOfMeshesToDecimate = decimables.length ; meshIndex < numberOfMeshesToDecimate ; meshIndex++ ) {
////
////                decimables[ meshIndex ].layers.set( 0 )
////
////            }
////
////            this.isDecimate = false
////
////            this._cache.raycastables = []
////
////        },
////
////        _getRaycastableCache () {
////
////            if ( this.needCacheUpdate || this._cache.raycastables.length === 0 ) {
////
////                this._cache.raycastables = []
////
////                let raycastables = this.scene.getObjectByName( 'Données' )
////                if ( !raycastables ) {
////                    raycastables = this.scene.getObjectByName( 'Sites' )
////                }
////                if ( !raycastables ) {
////                    raycastables = this.scene
////                }
////
////                const frustum                    = new Frustum()
////                const cameraViewProjectionMatrix = new Matrix4()
////
////                // every time the camera or objects change position (or every frame)
////                this.camera.updateMatrixWorld() // make sure the camera matrix is updated
////                this.camera.matrixWorldInverse.getInverse( this.camera.matrixWorld )
////                cameraViewProjectionMatrix.multiplyMatrices( this.camera.projectionMatrix, this.camera.matrixWorldInverse )
////                frustum.setFromMatrix( cameraViewProjectionMatrix )
////
////                this._updateRaycastableChildren.call( this, raycastables.children, frustum )
////
////                this.$emit( 'cacheUpdated', 'raycastables' )
////
////            }
////
////            return this._cache.raycastables
////
////        },
////
////        _updateRaycastableChildren ( children, frustum ) {
////
////            for ( let i = 0, n = children.length ; i < n ; i++ ) {
////
////                let child = children[ i ]
////
////                if ( !child.visible ) {
////                    continue
////                }
////
////                if ( child.isGroup || child.type === 'Scene' ) {
////                    this._updateRaycastableChildren.call( this, child.children, frustum )
////                }
////
////                if ( !child.isRaycastable ) {
////                    continue
////                }
////
////                if ( !frustum.intersectsObject( child ) ) {
////                    continue
////                }
////
////                this._cache.raycastables.push( child )
////                this._updateRaycastableChildren.call( this, child.children, frustum )
////
////            }
////
////        },
////
////        _getDecimateCache () {
////
////            // TODO: should be params
////            const decimateValue = 0.9
////
////            if ( !this.isDecimate && ( this.needCacheUpdate || this._cache.decimables.length === 0 ) ) {
////
////                this._cache.decimables = []
////                const meshes           = []
////
////                //Todo: Should be able to specify the Group/Layers/whatever where decimate
////                let decimables = this.scene.getObjectByName( 'Données' )
////                if ( !decimables ) {
////                    decimables = this.scene.getObjectByName( 'Sites' )
////                }
////                if ( !decimables ) {
////                    decimables = this.scene
////                }
////                this._updateDecimateCache.call( this, decimables.children, meshes )
////
////                // Store random meshes to decimate
////                const numberOfMeshes       = meshes.length
////                const numberOfMeshesToHide = Math.round( numberOfMeshes * decimateValue )
////                while ( this._cache.decimables.length < numberOfMeshesToHide ) {
////                    this._cache.decimables.push( meshes[ Math.floor( Math.random() * numberOfMeshes ) ] )
////                }
////
////                this.$emit( 'cacheUpdated', 'decimables' )
////
////            }
////
////            return this._cache.decimables
////
////        },
////
////        _updateDecimateCache ( children, meshes ) {
////
////            let child = undefined
////            for ( let i = 0, n = children.length ; i < n ; i++ ) {
////
////                child = children[ i ]
////
////                if ( !child.visible ) {
////                    continue
////                }
////
////                if ( child.isGroup ) {
////                    this._updateDecimateCache.call( this, child.children, meshes )
////                }
////
////                if ( child.type === 'Scene' ) {
////                    this._updateDecimateCache.call( this, child.children, meshes )
////                }
////
////                if ( child.isMesh ) {
////                    meshes.push( child )
////                }
////
////            }
////
////        }
//
//    },
//
//    created () {
//
////        window.addEventListener( 'resize', this._resize, false )
////
////        // Untracked private data
////        this._cache = {
////            decimables:   [],
////            isDecimate:   false,
////            raycastables: []
////        }
////
////        this._repopulateTimeoutId = undefined
//
//    },
//
//    mounted () {
//
////        // Set renderer
////        this._setRenderer( this.renderer )
////
////        // Init effects
////        this._setEffect( this.effect )
////
////        // Init raycaster
////        this._raycaster = new Raycaster()
////
////        // Init stats
////        this.stats                           = new Stats()
////        this.stats.domElement.style.display  = ( this.showStats ) ? 'block' : 'none'
////        this.stats.domElement.style.position = 'absolute'
////        this.stats.domElement.style.top      = null
////        this.stats.domElement.style.left     = null
////        this.stats.domElement.style.right    = '0px'
////        this.stats.domElement.style.bottom   = '0px'
////        this.$el.appendChild( this.stats.domElement )
////
////        // Fill parent
////        this._resize()
////
////        // Listen ( should bind in template ???)
////        this.$el.addEventListener( 'mousemove', this._raycast.bind( this ), true )
////        //        this.$el.addEventListener( 'mousedown', this._select.bind( this ), true )
////
////        // Start rendering if autoupdate
////        if ( this.autoUpdate ) {
////            this._startLoop()
////        }
//
//    },
//
//    beforeDestroy () {
//
//        this._stopLoop()
//
//        window.removeEventListener( 'resize', this._resize, false )
//
//    }

} )
