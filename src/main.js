import Vue from 'vue';
import ToDo from './ToDo.vue';
import { store } from '../src/store';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    render: h => h(ToDo),
});
