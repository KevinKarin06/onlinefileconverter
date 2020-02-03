
require('./bootstrap');

window.Vue = require('vue');

import vuetify from './vuetify/vuetify' // path to vuetify export

Vue.component('main-component', require('./components/MainComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
const app = new Vue({
    el: '#app',
    vuetify,
    data:{
        message: 'Hello from vue instance'
    },
    computed:{
        footerDate(){
            return new Date().getFullYear;
        }
    }
});
