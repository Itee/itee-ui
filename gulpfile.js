/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module Building
 *
 * @description The gulp tasks file. It allow to run some tasks from command line interface.<br>
 * The available tasks are:
 * <ul>
 * <li>help</li>
 * <li>patch</li>
 * <li>clean</li>
 * <li>lint</li>
 * <li>doc</li>
 * <li>unit</li>
 * <li>bench</li>
 * <li>test</li>
 * <li>build-test</li>
 * <li>build</li>
 * <li>release</li>
 * </ul>
 * You could find a complet explanation about these tasks using: <b>npm run help</b>.
 *
 * @requires {@link module: [gulp]{@link https://github.com/gulpjs/gulp}}
 * @requires {@link module: [gulp-jsdoc3]{@link https://github.com/mlucool/gulp-jsdoc3}}
 * @requires {@link module: [gulp-eslint]{@link https://github.com/adametry/gulp-eslint}}
 * @requires {@link module: [del]{@link https://github.com/sindresorhus/del}}
 * @requires {@link module: [minimist]{@link https://github.com/substack/minimist}}
 * @requires {@link module: [rollup]{@link https://github.com/rollup/rollup}}
 * @requires {@link module: [path]{@link https://nodejs.org/api/path.html}}
 * @requires {@link module: [karma]{@link https://github.com/karma-runner/karma}}
 * @requires {@link module: [fancy-log]{@link https://github.com/js-cli/fancy-log}}
 * @requires {@link module: [ansi-colors]{@link https://github.com/doowb/ansi-colors}}
 *
 *
 */

/* eslint-env node */

const packageInfos = require( './package.json' )
const gulp         = require( 'gulp' )
const jsdoc        = require( 'gulp-jsdoc3' )
const eslint       = require( 'gulp-eslint' )
const gulpif       = require( 'gulp-if' )
const less         = require( 'gulp-less' )
const sass         = require( 'gulp-sass' )(require('sass'))
const cleanCss     = require( 'gulp-clean-css' )
const concat       = require( 'gulp-concat' )
const del          = require( 'del' )
const parseArgs    = require( 'minimist' )
const rollup       = require( 'rollup' )
const path         = require( 'path' )
const karma        = require( 'karma' )
const log          = require( 'fancy-log' )
const colors       = require( 'ansi-colors' )
const red          = colors.red
const green        = colors.green
const blue         = colors.blue
const cyan         = colors.cyan
const yellow       = colors.yellow
const magenta      = colors.magenta

/**
 * @method npm run help ( default )
 * @global
 * @description Will display the help in console
 */
gulp.task( 'help', ( done ) => {

    log( '' )
    log( '====================================================' )
    log( '|                      HELP                        |' )
    log( '|                     Itee UI                      |' )
    log( `|                     v${packageInfos.version}                       |` )
    log( '====================================================' )
    log( '' )
    log( 'Available commands are:' )
    log( '\t', blue( 'npm run' ), cyan( 'help' ), ' - Display this help.' )
    log( '\t', blue( 'npm run' ), cyan( 'patch' ), ' - Will apply some patch/replacements in dependencies.', red( '(Apply only once after run "npm install")' ) )
    log( '\t', blue( 'npm run' ), cyan( 'clean' ), ' - Will delete builds and temporary folders.' )
    log( '\t', blue( 'npm run' ), cyan( 'lint' ), ' - Will run the eslint in pedantic mode with auto fix when possible.' )
    log( '\t', blue( 'npm run' ), cyan( 'doc' ), ' - Will run jsdoc, and create documentation under `documentation` folder, using the docdash theme' )
    log( '\t', blue( 'npm run' ), cyan( 'test' ), ' - Will run the test framworks (unit and bench), and create reports under `documentation/report` folder, using the mochawesome theme' )
    log( '\t', blue( 'npm run' ), cyan( 'unit' ), ' - Will run the karma server for unit tests.' )
    log( '\t', blue( 'npm run' ), cyan( 'bench' ), ' - Will run the karma server for benchmarks.' )
    log( '\t', blue( 'npm run' ), cyan( 'build' ), yellow( '--' ), green( '<options>' ), ' - Will build the application for development and/or production environments.', yellow( 'Note: The two dash are only required if you provide options !' ) )
    log( '\t\t The available', green( '<options>' ), 'are:' )
    log( '\t\t\t', green( '-n' ), 'or', green( '--name' ), ' - The export name of the builded application', red( '(required for UMD module)' ), cyan( '[Default: ""]' ), '.' )
    log( '\t\t\t', green( '-i' ), 'or', green( '--input' ), ' - The main file path to build', cyan( '[Default: "sources/main.js"]' ), '.' )
    log( '\t\t\t', green( '-o' ), 'or', green( '--output' ), ' - The folder where output the build', cyan( '[Default: "builds"]' ), '.' )
    log( '\t\t\t', green( '-f:' ), magenta( '<format>' ), 'or', green( '--format:' ), magenta( '<format>' ), ' - to specify the output build type. Where format could be any of:', magenta( 'amd' ), magenta( 'cjs' ), magenta( 'es' ), magenta( 'iife' ), magenta( 'umd' ), cyan( '[Default: "amd,cjs,es,iife,umd"]' ), '.' )
    log( '\t\t\t', green( '-e:' ), magenta( '<env>' ), 'or', green( '--env:' ), magenta( '<env>' ), ' - to specify the build environment. Where env could be any of:', magenta( 'dev' ), magenta( 'prod' ), cyan( '[Default: "dev"]' ), '.' )
    log( '\t\t\t', green( '-s' ), 'or', green( '--sourcemap' ), ' - to build with related source map', cyan( '[Default: true]' ), '.' )
    log( '\t\t\t', green( '-t' ), 'or', green( '--treeshake' ), ' - allow to perform treeshaking when building', cyan( '[Default: true]' ), '.' )
    log( '\t', blue( 'npm run' ), cyan( 'release' ), ' - Will run all the lint, test stuff, and if succeed will build the application.' )
    log( '' )
    log( 'In case you have', blue( 'gulp' ), 'installed globally, you could use also:' )
    log( '\t', blue( 'gulp' ), cyan( 'command' ), ' - It will perform the command like using "npm run" but with less characters to type... Because you\'re a developer, right ?' )
    log( '' )

    done()

} )

/**
 * @method npm run patch
 * @global
 * @description Will apply some patch/replacements in dependencies
 */
gulp.task( 'patch', ( done ) => {

    done()

} )

/**
 * @method npm run clean
 * @global
 * @description Will delete builds and temporary folders
 */
gulp.task( 'clean', () => {

    const filesToClean = [
        './builds',
        './tests/builds',
        './docs'
    ]

    return del( filesToClean )

} )

/**
 * @method npm run lint
 * @global
 * @description Will lint the sources files and try to fix the style when possible
 */
gulp.task( 'lint', () => {

    const filesToLint = [
        'gulpfile.js',
        'configs/**/*.js',
        'sources/**/*.js',
        '!sources/react/**/*.js',
        'tests/**/*.js',
        '!tests/builds/*.js'
    ]

    return gulp.src( filesToLint, { base: './' } )
               .pipe( eslint( {
                   allowInlineConfig: true,
                   fix:               true,
                   quiet:             false,
                   configFile:        './configs/eslint.conf.js',
                   useEslintrc:       false
               } ) )
               .pipe( eslint.format( 'stylish' ) )
               .pipe( gulp.dest( '.' ) )
               .pipe( eslint.failAfterError() )

} )

/**
 * @method npm run doc
 * @global
 * @description Will generate this documentation
 */
gulp.task( 'doc', ( done ) => {

    const config     = require( './configs/jsdoc.conf' )
    const filesToDoc = [
        'README.md',
        'gulpfile.js',
        './configs/*.js',
        './sources/**/*.js',
        './tests/**/*.js'
    ]

    gulp.src( filesToDoc, { read: false } )
        .pipe( jsdoc( config, done ) )

} )

/**
 * @method npm run unit
 * @global
 * @description Will run unit tests using karma
 */
gulp.task( 'unit', ( done ) => {

    const karmaServer = new karma.Server( {
        configFile: `${__dirname}/configs/karma.units.conf.js`,
        singleRun:  true
    }, ( exitCode ) => {

        if ( exitCode !== 0 ) {
            done( `Karma server exit with code ${exitCode}` )
        } else {
            log( `Karma server exit with code ${exitCode}` )
            done()
        }

    } )

    karmaServer.on( 'browser_error', ( browser, error ) => {
        log( red( error.message ) )
    } )

    karmaServer.start()

} )

/**
 * @method npm run bench
 * @global
 * @description Will run benchmarks using karma
 */
gulp.task( 'bench', ( done ) => {

    const karmaServer = new karma.Server( {
        configFile: `${__dirname}/configs/karma.benchs.conf.js`,
        singleRun:  true
    }, ( exitCode ) => {

        if ( exitCode !== 0 ) {
            done( `Karma server exit with code ${exitCode}` )
        } else {
            log( `Karma server exit with code ${exitCode}` )
            done()
        }

    } )

    karmaServer.on( 'browser_error', ( browser, error ) => {
        log( red( error.message ) )
    } )

    karmaServer.start()

} )

/**
 * @method npm run test
 * @global
 * @description Will run unit tests and benchmarks using karma
 */
gulp.task( 'test', gulp.series( 'unit', 'bench' ) )

/**
 * @method npm run build-test
 * @global
 * @description Will build itee client tests.
 */
gulp.task( 'build-test', ( done ) => {

    const configs = require( './configs/rollup.test.conf' )()

    nextBuild()

    function nextBuild ( error ) {
        'use strict'

        if ( error ) {

            done( error )

        } else if ( configs.length === 0 ) {

            done()

        } else {

            const config = configs.pop()
            log( `Building ${config.output.file}` )

            rollup.rollup( config )
                  .then( ( bundle ) => { return bundle.write( config.output ) } )
                  .then( () => { nextBuild() } )
                  .catch( nextBuild )

        }

    }

} )

/**
 * @method npm run build-style-dev
 * @global
 * @description Build less files from assets, and concat them into one file
 */
gulp.task( 'build-style', () => {

    const styleFiles = [
        //        './node_modules/bootstrap/scss/bootstrap.scss',
        //        './node_modules/bootstrap-vue/src/index.scss',
        // Or
        //        './node_modules/bootstrap/dist/css/bootstrap.css',
        //        './node_modules/bootstrap-vue/dist/bootstrap-vue.css',
        //        './sources/styles/itee-ui.less'
        // Or
        './sources/styles/itee-ui.scss',
        './sources/styles/itee-ui.less'
    ]

    const outputFolder       = './builds/'
    const fileName           = 'itee-ui.style.css'
    const fileNameMinimified = 'itee-ui.style.min.css'

    return gulp.src( styleFiles )
               .pipe( gulpif( /[.]scss$/, sass() ) )
               .pipe( gulpif( /[.]less$/, less() ) )
               .pipe( concat( fileName ) )
               .pipe( gulp.dest( outputFolder ) )
               .pipe( concat( fileNameMinimified ) )
               .pipe( cleanCss() )
               .pipe( gulp.dest( outputFolder ) )

} )

/*
gulp.task( 'build-style-dev', () => {

    const styleFiles = [
        //        './node_modules/bootstrap/scss/bootstrap.scss',
        //        './node_modules/bootstrap-vue/src/index.scss',
        // Or
        //        './node_modules/bootstrap/dist/css/bootstrap.css',
        //        './node_modules/bootstrap-vue/dist/bootstrap-vue.css',
        //        './sources/styles/itee-client.less'
        // Or
        './sources/styles/itee-ui.scss',
        './sources/styles/itee-client.less'
    ]

    return gulp.src( styleFiles )
               .pipe( gulpif( /[.]less$/, less() ) )
               .pipe( gulpif( /[.]scss$/, sass() ) )
               .pipe( concat( 'itee-client.style.css' ) )
               .pipe( gulp.dest( './builds/' ) )

} )

/!**
 * @method npm run build-style-prod
 * @global
 * @description Build less files from assets, and concat them into one minimified file
 *!/
gulp.task( 'build-style-prod', () => {

    const styleFiles = [
        //        './node_modules/bootstrap/scss/bootstrap.scss',
        //        './node_modules/bootstrap-vue/src/index.scss',
        // Or
        //        './node_modules/bootstrap/dist/css/bootstrap.css',
        //        './node_modules/bootstrap-vue/dist/bootstrap-vue.css',
        //        './sources/styles/itee-client.less'
        // Or
        './sources/styles/itee-ui.scss',
        './sources/styles/itee-client.less'
    ]

    return gulp.src( styleFiles )
               .pipe( gulpif( /[.]scss/, sass() ) )
               .pipe( gulpif( /[.]less$/, less() ) )
               .pipe( concat( 'itee-client.style.min.css' ) )
               .pipe( cleanCss( { compatibility: 'ie8' } ) )
               .pipe( gulp.dest( './builds/' ) )

} )
*/

/**
 * @method npm run build-style
 * @global
 * @description Build styles files from assets for dev and prod envs.
 */
//gulp.task( 'build-style', gulp.parallel( 'build-style-dev', 'build-style-prod' ) )

/**
 * @method npm run watch-style
 * @global
 * @description Add watcher to assets less/css files and run build-style on file change
 */
gulp.task( 'watch-style', gulp.series( 'build-style', ( done ) => {

    const styleFiles = [
        //    './node_modules/font-awesome/less/font-awesome.less',
        //    './node_modules/bootstrap/scss/bootstrap.scss',
        //    './node_modules/bootstrap-slider/dist/css/bootstrap-slider.css',
        './styles/itee-client.less'
    ]

    gulp.watch( styleFiles, [ 'build-style' ] )
    done()

} ) )

gulp.task( 'build-script', ( done ) => {

    const options = parseArgs( process.argv, {
        string:  [ 'n', 'i', 'f', 'e' ],
        boolean: [ 's', 't' ],
        default: {
            n: 'Itee.UI',
            i: path.join( __dirname, 'sources', `${packageInfos.name}.js` ),
            o: path.join( __dirname, 'builds' ),
            f: 'esm,cjs,iife',
            e: 'dev,prod',
            s: true,
            t: true
        },
        alias: {
            n: 'name',
            i: 'input',
            o: 'output',
            f: 'format',
            e: 'env',
            s: 'sourcemap',
            t: 'treeshake'
        }
    } )

    const configs = require( './configs/rollup.conf' )( options )

    nextBuild()

    function nextBuild ( error ) {
        'use strict'

        if ( error ) {

            done( error )

        } else if ( configs.length === 0 ) {

            done()

        } else {

            const config = configs.pop()
            log( `Building ${config.output.file}` )

            rollup.rollup( config )
                  .then( ( bundle ) => { return bundle.write( config.output ) } )
                  .then( () => { nextBuild() } )
                  .catch( nextBuild )

        }

    }

} )

/**
 * @method npm run build
 * @global
 * @description Will build itee client module using optional arguments. See help to further informations.
 */
//gulp.task( 'build', gulp.parallel( 'build-style' ) )
gulp.task( 'build', gulp.parallel( 'build-style', 'build-script' ) )

/**
 * @method npm run release
 * @global
 * @description Will perform a complet release of the library including 'clean', 'lint', 'doc', 'build-test', 'test' and finally 'build'.
 */
gulp.task( 'release', gulp.series( 'clean', 'lint', 'doc', 'build-test', 'test', 'build' ) )

//---------

gulp.task( 'default', gulp.series( 'help' ) )
