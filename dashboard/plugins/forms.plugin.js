import Vue from 'vue'
import FormGenerator from 'vue-form-generator'
import Multiselect from 'vue-multiselect'

import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.component('multiselect', Multiselect)
Vue.use(FormGenerator)
