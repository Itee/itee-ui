/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module Config-Rollup
 * @description The file manage the rollup configuration for build the library using differents arguments. It allow to build with two type of environment (dev and prod), and differents output format.
 * Use npm run help to display all available build options.
 *
 * @requires {@link module: [rollup-plugin-commonjs]{@link https://github.com/rollup/rollup-plugin-commonjs}}
 * @requires {@link module: [path]{@link https://nodejs.org/api/path.html}}
 * @requires {@link module: [rollup-plugin-node-resolve]{@link https://github.com/rollup/rollup-plugin-node-resolve}}
 * @requires {@link module: [rollup-plugin-terser]{@link https://github.com/TrySound/rollup-plugin-terser}}
 */

const packageInfos = require( '../package' )
const commonjs     = require( 'rollup-plugin-commonjs' )
const path         = require( 'path' )
const resolve      = require( 'rollup-plugin-node-resolve' )
const terser       = require( 'rollup-plugin-terser' ).terser

function _computeBanner ( name, format ) {

    const packageName = name || packageInfos.name
    let prettyFormat  = ''

    switch ( format ) {

        case 'cjs':
            prettyFormat = 'CommonJs'
            break

        case 'esm':
            prettyFormat = 'EsModule'
            break

        case 'iife':
            prettyFormat = 'Standalone'
            break

        case 'umd':
            prettyFormat = 'Universal'
            break

        default:
            throw new RangeError( `Invalid switch parameter: ${format}` )

    }

    return `console.log('${packageName} v${packageInfos.version} - ${prettyFormat}')`

}

function _computeIntro () {

    return '' +
        'if( iteeValidators === undefined ) { console.error(\'Itee.UI need Itee.Validators to be defined first. Please check your scripts loading order.\') }' + '\n' +
        'if( iteeUtils === undefined ) { console.error(\'Itee.UI need Itee.Utils to be defined first. Please check your scripts loading order.\') }' + '\n' +
        'if( threeFull === undefined ) { console.error(\'Itee.UI need Three to be defined first. Please check your scripts loading order.\') }' + '\n' +
        'if( Vue === undefined ) { console.error(\'Itee.UI need Vue to be defined first. Please check your scripts loading order.\') }' + '\n'

}

/**
 * Will create an appropriate configuration object for rollup, related to the given arguments.
 *
 * @generator
 * @param options
 * @return {Array.<json>} An array of rollup configuration
 */
function CreateRollupConfigs ( options ) {
    'use strict'

    const name      = options.name
    const input     = options.input
    const output    = options.output
    const formats   = options.format.split( ',' )
    const envs      = options.env.split( ',' )
    const sourcemap = options.sourcemap
    //    const treeshake = options.treeshake
    const fileName  = path.basename( input, '.js' )

    const configs = []

    for ( let formatIndex = 0, numberOfFormats = formats.length ; formatIndex < numberOfFormats ; ++formatIndex ) {

        for ( let envIndex = 0, numberOfEnvs = envs.length ; envIndex < numberOfEnvs ; envIndex++ ) {

            const env        = envs[ envIndex ]
            const isProd     = ( env.includes( 'prod' ) )
            const format     = formats[ formatIndex ]
            const outputPath = ( isProd ) ? path.join( output, `${fileName}.${format}.min.js` ) : path.join( output, `${fileName}.${format}.js` )

            configs.push( {
                input:    input,
                external: [
                    'itee-utils',
                    'itee-validators',
                    'vue',
                    'three-full'
                ],
                plugins: [
                    commonjs( {
                        include: 'node_modules/**'
                    } ),
                    resolve( {
                        preferBuiltins: true
                    } ),
                    isProd && terser()
                ],
                onwarn: ( { loc, frame, message } ) => {

                    // Ignore some errors
                    if ( message.includes( 'Circular dependency' ) ) { return }
                    if ( message.includes( 'plugin uglify is deprecated' ) ) { return }

                    if ( loc ) {
                        process.stderr.write( `/!\\ ${loc.file} (${loc.line}:${loc.column}) ${frame} ${message}\n` )
                    } else {
                        process.stderr.write( `/!\\ ${message}\n` )
                    }

                },
                treeshake: {
                    annotations:             true,
                    moduleSideEffects:       false,
                    propertyReadSideEffects: true,
                    tryCatchDeoptimization:  true
                },
                output: {
                    // core options
                    file:    outputPath,
                    format:  format,
                    name:    name,
                    globals: {
                        'itee-validators':      'Itee.Validators',
                        'itee-utils':           'Itee.Utils',
                        'three-full':           'Three',
                        'vue':                  'Vue'
                    },

                    // advanced options
                    paths:     {},
                    banner:    ( !isProd ) ? _computeBanner( name, format ) : '',
                    footer:    '',
                    intro:     ( !isProd && format === 'iife' ) ? _computeIntro() : '',
                    outro:     '',
                    sourcemap: sourcemap,
                    interop:   true,

                    // danger zone
                    exports: 'auto',
                    amd:     {},
                    indent:  '\t',
                    strict:  true
                }
            } )

        }

    }

    return configs

}

module.exports = CreateRollupConfigs

