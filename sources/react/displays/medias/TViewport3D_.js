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

import {
    AmbientLight,
    BoxBufferGeometry,
    GridHelper,
    Mesh,
    MeshPhongMaterial,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from 'three'

class TViewport3D extends React.Component {

    constructor ( props ) {

        super( props )

        this._frameId  = undefined
        this._renderer = new WebGLRenderer( { antialias: true } )
        this._scene    = new Scene()
        this._camera   = new PerspectiveCamera()
        this._cube     = undefined

        // Handler
        this._resize = this._resize.bind( this )

    }

    /**
     * React lifecycle
     */
    componentWillMount () {

        window.addEventListener( 'resize', this._resize, false )

    }

    componentWillReceiveProps ( nextProps ) {}

    componentWillUpdate ( nextProps, nextState ) {

        //        this._resize()

    }

    componentDidUpdate ( prevProps, prevState ) {}

    componentDidCatch ( error, info ) {
        console.error( error )
    }

    componentDidMount () {

        this._resize()

        // Set renderer
        this._renderer.setClearColor( 0x777777 )
        this._renderer.autoClear = true

        // Add renderer canvas
        this._container.appendChild( this._renderer.domElement )

        // Set camera position
        this._camera.fov        = 50
        this._camera.near       = 0.01
        this._camera.far        = 10000
        this._camera.position.x = 0.0
        this._camera.position.y = 5.0
        this._camera.position.z = 7.0
        this._camera.setRotationFromAxisAngle( new Vector3( 1.0, 0.0, 0.0 ), -0.610865 )
        this._camera.updateProjectionMatrix()

        // Add light
        this._scene.add( new AmbientLight( 0xC8C8C8 ) )

        // Create the scene
        const geometry = new BoxBufferGeometry( 1, 1, 1 )
        const material = new MeshPhongMaterial( '0x0096FF' )
        this._cube     = new Mesh( geometry, material )
        this._scene.add( this._cube )

        const gridHelper = new GridHelper( 100, 100 )
        this._scene.add( gridHelper )

        // Add listener

        // Start rendering
        this._startLoop()

    }

    componentWillUnmount () {

        this._stopLoop()

        window.removeEventListener( 'resize', this._resize, false )

    }

    shouldComponentUpdate ( nextProps, nextState ) {}

    render () {

        const props = this.props

        const _style = {
            width:    '100%',
            height:   '100%',
            overflow: 'hidden'
        }

        return (
            <div ref={( container ) => {this._container = container}} id={'myViewport3D'} className={'tViewport3D'} style={_style}></div>
        )

    }

    /**
     * Component methods
     */
    _startLoop () {

        if ( this._frameId ) {
            return
        }

        this._frameId = window.requestAnimationFrame( this._loop.bind( this ) )

    }

    _loop () {

        this._frameId = window.requestAnimationFrame( this._loop.bind( this ) )

        // Perform loop work here
        const SPEED = 0.01
        this._cube.rotation.x -= SPEED * 2
        this._cube.rotation.y -= SPEED
        this._cube.rotation.z -= SPEED * 3

        this._renderer.render( this._scene, this._camera )

    }

    _stopLoop () {

        window.cancelAnimationFrame( this._frameId )

    }

    _resize () {

        const containerWidth  = this._container.clientWidth
        const containerHeight = this._container.clientHeight || 1 // In case height === 0 set to 1

        this._renderer.setSize( containerWidth, containerHeight )
        this._camera.aspect = ( containerWidth / containerHeight )
        this._camera.updateProjectionMatrix()

    }

}

export { TViewport3D }
