/**
 * @file The main entry point for Itee-UI, it contains all exports of the library
 *
 * @author Tristan Valcke
 * @see https://github.com/Itee
 * @license MIT
 */

// Import FontAwesome
import { library }  from '@fortawesome/fontawesome-svg-core'
import { fab }      from '@fortawesome/free-brands-svg-icons'
import { far }      from '@fortawesome/free-regular-svg-icons'
import { fas }      from '@fortawesome/free-solid-svg-icons'
import BootstrapVue from 'bootstrap-vue'
import Vue          from 'vue'

library.add( fab, far, fas )

Vue.use( BootstrapVue )

//export * from './react/_react'
export * from './vue/_vue'
