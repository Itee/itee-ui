/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import Vue from 'vue'

export default Vue.component( 'TInput', {
    template: `
        <div v-if="data._type">
            <TInputBoolean v-if="(data._type === 'boolean')" :label=data.label :value=data.value :onChange=onChange />
            <TInputText v-else-if="(data._type === 'string')" :label=data.label :value=data.value :onChange=onChange />
            <TInputNumber v-else-if="(data._type === 'number')" :label=data.label :value=data.value :onChange=onChange />
            <TInputArray v-else-if="(data._type === 'array')" :label=data.label :value=data.value :onChange=onChange />
            <TInputColor v-else-if="(data._type === 'color')" :label=data.label :value=data.value :onChange=onChange />
            <TInputFile v-else-if="(data._type === 'file')" :label=data.label :placeholder=data.placeholder :onChange=onChange />
            <TInputRange v-else-if="(data._type === 'range')" :label=data.label :min="data.min" :max="data.max" :step="data.step" :value="data.value" :onChange=onChange />
            <TInputObject v-else-if="(data._type === 'object')" :label=data.label :value=data.value :onChange=_onChange />
            <div v-else class="input-group mb-3">
                <div v-if="data.label" class="input-group-prepend">
                    <label class="input-group-text">{{data.label}}</label>
                </div>
                <div class="form-control">null or undefined</div>
            </div>
        </div>
        <div v-else>
            <!--Trying to auto-detect the underlying's value type-->
            <TInputBoolean v-if="(typeof data.value === 'boolean')" :label=data.label :value=data.value :onChange=onChange />
            <TInputText v-else-if="(typeof data.value === 'string')" :label=data.label :value=data.value :onChange=onChange />
            <TInputNumber v-else-if="(typeof data.value === 'number')" :label=data.label :value=data.value :onChange=onChange />
            <TInputArray v-else-if="(Array.isArray(data.value))" :label=data.label :value=data.value :onChange=onChange />
            <TInputObject v-else-if="(data.value && typeof data.value === 'object')" :label=data.label :value=data.value :onChange=_onChange />
            <div v-else class="input-group mb-3">
                <div v-if="data.label" class="input-group-prepend">
                    <label class="input-group-text">{{data.label}}</label>
                </div>
                <div class="form-control">null or undefined</div>
            </div>
        </div>
    `,
    props:   [ 'data', 'onChange' ],
    methods: {

        _onChange ( key, value ) {

            this.onChange( {
                key,
                value
            } )

        }

    }
} )
