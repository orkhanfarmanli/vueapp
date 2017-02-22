import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import Form from './utilities/Form';

window.Vue = Vue;
Vue.use(VueRouter);


window.axios = axios;
window.moment = moment;
window.Form = Form;
// window.axios.defaults.headers.common = {
//     'X-CSRF-TOKEN': window.Laravel.csrfToken,
//     'X-Requested-With': 'XMLHttpRequest'
// };
