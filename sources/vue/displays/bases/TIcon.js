/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue                 from 'vue'

// Todo: implement router facility here using target instead of clickHandler !
export default Vue.component( 'TIcon', {
    template:   `
        <font-awesome-icon :icon="icon" v-on="$listeners" />
    `,
    props:      [ 'id', 'icon' ],
    components: {
        FontAwesomeIcon
    }
} )
