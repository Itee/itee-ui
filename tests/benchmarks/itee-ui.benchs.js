/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global suite, benchmark */

const IteeUISuite = suite( 'Itee#UI', () => {

    benchmark(
        'isBenching()',
        function () {

            return true

        },
        {} )

} )

export { IteeUISuite }
