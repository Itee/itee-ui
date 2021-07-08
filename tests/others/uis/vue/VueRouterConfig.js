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

const AppPage = {
    template: `
        <TContainer orientation="vertical" hAlign="stretch" vAlign="start" expand=true>
        
            <THeader>
                <TAppBar height="60px">
                    <TContainer vAlign="center" hAlign="start">
                        <TLabel class="tBrand" label="ITEE" icon="rocket" />
                    </TContainer>
                    <TMenu>
                        <TMenuItem label="Home" :onClickHandler="function() { routeTo('/') }" />
                        <TMenuItem label="Documentation" :onClickHandler="function() { routeTo('/documentation') }" />
                        <TMenuItem label="Téléversement" :onClickHandler="function() { routeTo('/upload') }" />
                        <TMenuItem label="Tutoriel" :onClickHandler="function() { routeTo('/tutorial') }" />
                        <TMenuItem label="Utilisateur" :onClickHandler="function() { routeTo('/users') }" />
                        <TMenuItem label="A propos" :onClickHandler=alertFooBar />
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
                    </TMenu>
                    <TContainer vAlign="center" hAlign="end">
                        <div>loginbtn</div>
                    </TContainer>
                </TAppBar>
            </THeader>
            
            <TContent>
                <router-view></router-view>
            </TContent>
            
            <TFooter>
                Footer
            </TFooter>
            
        </TContainer>
    `,
    props: [
        'navLinks'
    ],
    methods: {

        routeTo ( route ) {
            'use strict'

            this.$router.push( route )

        },

        alertFooBar () {
            'use strict'
            alert( 'foo bar' )
        }

    }
}

const HomePage = {
    template: `
   <TContainerVertical vAlign="start" hAlign="stretch" expand="true">
     
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
        
    </TContainerVertical>
    `,
    data: function () {

        return {
            viewport: {
                scene:           new Itee.Scene(),
                camera:          'perspective',
                renderer:        new Itee.WebGLRenderer( { antialias: true } ),
                backgroundColor: 0x123456,
                control:         'orbital'
            },
            treeItems: []
        }

    },
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

const DocPage = {
    template: `
        <div class="documentation">
            Welcome to documentation !
        </div>
    `
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UploadPage = {
    template: `
        <TContainerVertical vAlign="start" hAlign="stretch" expand="true">

			<div class="panel panel-default" style="margin-top: 20px">
				
				<div class="panel-heading"><strong>Téléversements</strong></div>
				<div class="panel-body">

					<!-- Company Form -->
					<TFormCRUD title="Compagnies" v-bind:datas="companies" />

					<!--&lt;!&ndash; Site Form &ndash;&gt;-->
					<!--<h4>Selectionner le site</h4>-->
					<!--<form action="" method="post" enctype="multipart/form-data" id="js-site-form">-->
						<!--<div class="form-group">-->
							<!--<label for="site-name-select">Select</label>-->
							<!--<select class="form-control" id="site-name-select"></select>-->
						<!--</div>-->
						<!--<div class="form-group">-->
							<!--<label>Create new site</label>-->
							<!--<div class="input-group">-->
								<!--<input id="site-name-input" type="text" class="form-control" placeholder="Site name...">-->
								<!--<span class="input-group-btn">-->
									<!--<button id="site-add-button" class="btn btn-secondary" type="button">Add</button>-->
								<!--</span>-->
							<!--</div>-->
						<!--</div>-->
					<!--</form>-->

					<!--&lt;!&ndash; Bulding Form &ndash;&gt;-->
					<!--<h4>Selectionner le batiment à qui créditer les fichiers</h4>-->
					<!--<form action="" method="post" enctype="multipart/form-data" id="js-building-form">-->
						<!--<div class="form-group">-->
							<!--<label for="building-name-select">Select</label>-->
							<!--<select class="form-control" id="building-name-select"></select>-->
						<!--</div>-->
						<!--<div class="form-group">-->
							<!--<label>Create new building</label>-->
							<!--<div class="input-group">-->
								<!--<input id="building-name-input" type="text" class="form-control" placeholder="Building name...">-->
								<!--<span class="input-group-btn">-->
									<!--<button id="building-add-button" class="btn btn-secondary" type="button">Add</button>-->
								<!--</span>-->
							<!--</div>-->
						<!--</div>-->
					<!--</form>-->

					<!-- Files Form -->
					<h4>Selectionner les fichiers depuis votre ordinateur</h4>
					<form id="js-upload-form" action="" method="post" enctype="multipart/form-data" v-on:submit.prevent="onSubmit">
						<div class="form-inline">
							<div class="form-group">
								<input type="file" name="files[]" id="js-upload-files" multiple>
							</div>
							<button type="submit" class="btn btn-sm btn-primary" id="js-upload-submit">Téléverser</button>
						</div>
					</form>

					<!-- Drop Zone -->
					<h4>Ou glissez-déposez les fichiers ci-dessous</h4>
					<div class="upload-drop-zone" v-on:dragover.prevent="onDragOver" v-on:dragleave="onDragLeave" v-on:drop.stop.prevent="onDrop">
						Ajouter les fichiers ici
					</div>

					<!-- Upload Finished -->
					<div class="js-upload-finished">

						<h3>Fichier traités</h3>
						<ul id="files-list" class="list-group"></ul>

					</div>
				</div>
			</div>

        </TContainerVertical>
    `,
    data: function () {

        return {
            companiesManager: new Itee.TDataBaseManager(),
            companies:        undefined,
            selectedCompany:  undefined,
            sitesManager:     new Itee.TDataBaseManager(),
            sites:            undefined,
            selectedSite:     undefined,
            buildingsManager: new Itee.TDataBaseManager(),
            buildings:        undefined,
            selectedBuilding: undefined
        }

    },
    methods: {

        upload ( data, methods, route, view ) {

            const request              = new XMLHttpRequest()
            request.onreadystatechange = onReadyStateChange
            request.upload.addEventListener( 'progress', onProgress, false )
            request.onload  = onLoad
            request.onerror = onError

            request.open( methods, route )
            request.send( data )

            function onReadyStateChange () {

                if ( request.readyState === 4 ) {

                    var response = getRequestResponse( request )

                    if ( request.status === 200 ) {

                        view.setSuccess( response )

                    } else {

                        view.setError( response )

                    }

                }

            }

            function onProgress ( progressEvent ) {

                var progressValue = Math.ceil( ( progressEvent.loaded / progressEvent.total ) * 100 ) + '%'
                view.setProgress( progressValue )

            }

            function onLoad ( /*loadEvent*/ ) {

            }

            function onError ( errorEvent ) {

                view.setError( 'Une erreur ' + errorEvent.target.status + ' s\'est produite au cours de la réception du document.' )

            }

            function getRequestResponse ( request ) {

                const responses = ( request.response ) ? JSON.parse( request.response ) : {}
                let response    = null
                let message     = ''

                for ( let field in responses ) {

                    if ( !Object.prototype.hasOwnProperty.call( responses, field ) ) { continue }

                    response = responses[ field ]

                    message += `${response.title}: ${response.message}
`
                }

                return message

            }

        },

        startUpload ( files ) {

            if ( files.length === 0 ) {
                return
            }

            files = this.convertFilesObjectToArray( files )

            let view = undefined
            let file = undefined
            for ( var fileIndex = files.length - 1 ; fileIndex >= 0 ; fileIndex-- ) {

                file = files.splice( fileIndex )[ 0 ]

                if ( !file ) { continue }

                view = this.createViewForFileUpload()

                // if file is associative search for the other else if not found set view in pending mode
                var fileName      = file.name
                var fileExtension = this.getFileExtention( fileName )

                if ( fileExtension === null ) {

                    view.setLabel( fileName )
                    view.setError( 'Mauvaise extension de fichier: Les fichier sans extension ne sont pas géré !' )

                } else if ( fileExtension === 'obj' || fileExtension === 'mtl' ) {

                    var associateExtension = ( fileExtension === 'obj' ) ? 'mtl' : 'obj'
                    view.setLabel( fileName + '/' + associateExtension )

                    var associateFileName = fileName.split( '.' )[ 0 ] + '.' + associateExtension
                    var associatedFile    = this.searchFileWithName( associateFileName, files )

                    if ( !associatedFile ) {

                        //						view.setWarning( 'Impossible de trouver le fichier ' + associateFileName + ' à associer...' )
                        //						continue

                        this.upload( this.convertFileToFormData( file ), 'POST', '../uploads', view )

                    } else {

                        this.upload( this.convertFilesToFormData( [ file, associatedFile ] ), 'POST', '../uploads', view )

                    }

                } else {

                    // Single file
                    view.setLabel( fileName )
                    this.upload( this.convertFileToFormData( file ), 'POST', '../uploads', view )

                }

            }

        },

        convertFilesObjectToArray ( files ) {

            const fileArray = []

            for ( let field in files ) {

                if ( !Object.prototype.hasOwnProperty.call( files, field ) ) { continue }

                fileArray.push( files[ field ] )

            }

            return fileArray

        },

        convertFilesToFormData ( files ) {

            let data = new FormData()
            data.append( 'buildingId', document.getElementById( 'building-name-select' ).value )

            let file = undefined
            for ( let fileIndex = 0, numberOfFiles = files.length ; fileIndex < numberOfFiles ; fileIndex++ ) {
                file = files[ fileIndex ]
                data.append( file.name, file )
            }

            return data
        },

        convertFileToFormData ( file ) {

            let data = new FormData()
            data.append( 'buildingId', document.getElementById( 'building-name-select' ).value )
            data.append( 'fileSize', file.size )
            data.append( file.name, file )

            return data
        },

        getFileExtention ( fileName ) {

            const splitName      = fileName.split( '.' )
            const numberOfSplits = splitName.length

            return ( numberOfSplits >= 2 ) ? splitName[ numberOfSplits - 1 ] : null

        },

        searchFileWithName ( fileName, files ) {

            let file = undefined

            const indexOfFile = files.findIndex( function ( file ) {

                return file.name === fileName

            } )

            if ( indexOfFile > -1 ) {
                file = files.splice( indexOfFile, 1 )[ 0 ]
            }

            return file

        },

        createViewForFileUpload () {

            const domParser = new DOMParser()

            const _TEMPLATE = '' +
                '<li class="list-group-item align-center">' +
                '	<span class="label"></span>' +
                '	<span class="message"></span>' +
                '	<div class="progress inline-progress">' +
                '		<div class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%">0%</div>' +
                '	</div>' +
                '	<span class="badge"></span>' +
                '</li>'

            const template    = domParser.parseFromString( _TEMPLATE, 'text/xml' )
            const label       = template.getElementsByClassName( '.label' )
            const message     = template.getElementsByClassName( '.message' )
            const progress    = template.getElementsByClassName( '.progress' )
            const progressBar = progress.getElementsByClassName( '.progress-bar' )
            const badge       = template.getElementsByClassName( '.badge' )

            message.hide()
            badge.hide()

            document.getElementById( 'files-list' ).appendChild( template[ 0 ] )

            return {
                _:           template,
                label:       label,
                message:     message,
                progress:    progress,
                progressBar: progressBar,
                badge:       badge,
                setLabel ( labelValue ) {

                    this.label.text( labelValue )

                },
                setProgress ( progressValue ) {

                    this.progressBar[ 0 ].style.width = progressValue
                    this.progressBar[ 0 ].textContent = progressValue

                },
                setSuccess ( message ) {

                    this._.addClass( 'list-group-item-success' )
                    this.progress.hide()
                    this.message.text( message )
                    this.message.show()
                    this.badge.text( 'Succès' )
                    this.badge.addClass( 'alert-success' )
                    this.badge.show()

                },
                setWarning ( message ) {

                    this._.addClass( 'list-group-item-warning' )
                    this.progress.hide()
                    this.message.text( message )
                    this.message.show()
                    this.badge.text( 'Attention' )
                    this.badge.addClass( 'alert-warning' )
                    this.badge.show()

                },
                setError ( message ) {

                    this._.addClass( 'list-group-item-danger' )
                    this.progress.hide()
                    this.message.text( message )
                    this.message.show()
                    this.badge.text( 'Erreur' )
                    this.badge.addClass( 'alert-danger' )
                    this.badge.show()

                }
            }
        },

        //// Handlers

        onSubmit ( submitEvent ) {
            'use strict'

            this.startUpload( submitEvent.target[ 0 ].files )

        },

        onDrop ( dropEvent ) {
            'use strict'

            dropEvent.target.className = 'upload-drop-zone'
            this.startUpload( dropEvent.dataTransfer.files )

        },

        onDragOver ( dragEvent ) {
            'use strict'

            dragEvent.target.className = 'upload-drop-zone drop'
            return false

        },

        onDragLeave ( dragEvent ) {
            'use strict'

            dragEvent.target.className = 'upload-drop-zone'
            return false

        },

        /////

        fetchData () {
            'use strict'

            this.$data.companiesManager.read( {}, function ( companies ) {

                this.companies = companies

            } )

        }

    },
    created () {

        // récupérer les données lorsque la vue est créée et
        // que les données sont déjà observées

        this.$data.companiesManager.basePath = 'companies/'
        this.fetchData()
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TutorialPage = {
    template: `
        <div class="tutorial">
            Welcome to tutorial !
        </div>
    `
}

const UsersPage = {
    template: `
        <div class="userList">
            <ul v-if="users">
                <li v-for="user in users">
                    <router-link :to="'/users/'+user.id">{{user.name}}</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    `,
    props: [ 'users' ]
}

const User = {
    template: `
        <div class="user">
            <h2>Utilisateur {{ user.name }} #{{ user.id }}</h2>
            <router-link :to="'/users/'+user.id+'/'">Global</router-link>
            <router-link :to="'/users/'+user.id+'/profile'">Profile</router-link>
            <router-link :to="'/users/'+user.id+'/posts'">Posts</router-link>
            <router-view></router-view>
        </div>
    `,
    props: [ 'user' ]
}

const UserHome = {
    template: `
        <div class="user-home">
            Welcome to {{ $route.params.userId }}'s home !
        </div>
    `
}

const UserProfile = {
    template: `
        <div class="user-profile">
          This is {{ $route.params.userId }}'s profile !
        </div>
    `
}

const UserPosts = {
    template: `
        <div class="user-posts">
            Posts:
            <ul v-if="posts">
                <li v-for="post in posts">
                    <router-link :to="baseRoute+post.id">{{post.title}}</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    `,
    props: [ 'baseRoute' ]
}

const UserPost = {
    template: `
        <div class="post">
                
            <div class="loading" v-if="loading">
              Chargement...
            </div>
        
            <div v-if="error" class="error">
              {{ error }}
            </div>
        
            <div v-if="post" class="content">
              <h2>{{ post.title }}</h2>
              <p>{{ post.message }}</p>
            </div>
            
        </div>
    `,
    data () {
        return {
            loading: false,
            post:    null,
            error:   null
        }
    },
    created () {
        // récupérer les données lorsque la vue est créée et
        // que les données sont déjà observées
        this.fetchData()
    },
    watch: {
        // appeler encore la méthode si la route change
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {

            this.error   = null
            this.post    = null
            this.loading = true

            // remplacer `getPost` par une fonction de récupération de données
            getUserPostById( this.$route.params.postId, ( error, post ) => {

                this.loading = false

                if ( error ) {

                    this.error = error.message

                } else {

                    this.post = post

                }

            } )

        }
    }
}

const NotFound = {
    template: `
        <div>
            Uuuuhhhh, you got a 404 !
        </div>
    `
}

/////////////////
// SIMULATE DB //
/////////////////

const fakeUsersData = [
    {
        id:   '123',
        name: 'Toto'
    }, {
        id:   '456',
        name: 'Tata'
    }, {
        id:   '789',
        name: 'TiTI'
    }
]

const fakeUserPostsData = [
    {
        id:      '12345',
        title:   'Hello world !',
        message: 'En utilisant cette approche, nous naviguons et faisons immédiatement le rendu du composant et récupérons les données via le hook created du composant. Cela nous donne l\'opportunité d\'afficher un état de chargement pendant que les données sont récupérées à travers le réseau, et nous pouvons aussi gérer le chargement différemment pour chaque vue.'
    },
    {
        id:      '654321',
        title:   'Awesome post',
        message: 'Récupération de données après la navigation : effectue la navigation en premier, et récupère les données dans le hook entrant du cycle de vie d\'un composant. Affiche un état de chargement pendant que les données sont en train d\'être récupérées.'
    }
]

function getUserPostById ( id, callback ) {
    'use strict'

    if ( id === '123456' ) {

        setTimeout( () => {
            callback( null, fakeUserPostsData[ 0 ] )
        }, 1000 )

    } else if ( id === '654321' ) {

        setTimeout( () => {
            callback( null, fakeUserPostsData[ 1 ] )
        }, 3000 )

    } else {

        callback( { message: 'Invalid post id !' }, null )

    }

}

//////////////
// MAIN APP //
//////////////

window.TConfigParameters = {
    launchingSite: '#itee-application-root',
    routes:        [
        {
            path:      '/',
            component: AppPage,
            props:     {
                navLinks: [
                    {
                        id:    'homeId',
                        route: '/',
                        text:  'Home'
                    }, {
                        id:    'barId',
                        route: '/bar',
                        text:  'Bar'
                    }, {
                        id:    'usersId',
                        route: '/users',
                        text:  'Users'
                    }, {
                        id:    'deadlinkId',
                        route: '/deadlink',
                        text:  'Deadlink'
                    }
                ]
            },
            children: [
                {
                    path:      '',
                    component: HomePage
                },
                {
                    path:      'documentation',
                    component: DocPage
                },
                {
                    path:      'upload',
                    component: UploadPage
                },
                {
                    path:      '/tutorial',
                    component: TutorialPage
                },
                {
                    path:      '/users',
                    component: UsersPage,
                    props:     {
                        users: fakeUsersData
                    },
                    children: [
                        {
                            path:      ':userId',
                            component: User,
                            props:     ( route ) => {
                                'use strict'

                                const user = fakeUsersData.find( user => user.id === route.params.userId )

                                return {
                                    user
                                }

                            },
                            children: [
                                {
                                    path:      '',
                                    component: UserHome
                                },
                                {
                                    path:      'profile',
                                    component: UserProfile
                                },
                                {
                                    path:      'posts',
                                    component: UserPosts,
                                    props:     ( route ) => ( { baseRoute: '/users/' + route.params.userId + '/posts' } ),
                                    children:  [
                                        {
                                            path:      ':postId',
                                            component: UserPost
                                        }
                                    ]
                                },
                                {
                                    path:     '*',
                                    redirect: NotFound
                                }
                            ]
                        }
                    ]
                },
                {
                    path:      '*',
                    component: NotFound
                }
            ]
        },
        {
            path:      '*',
            component: NotFound
        }
    ]
}
