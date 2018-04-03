// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueLazyLoader from 'vue-lazyload';
import FastClick from 'fastclick';

// Vue.prototype.$http = axios;
require('./assets/css/normalize.css');

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
    }, false);
}
Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.use(VueLazyLoader, {
    error: '',
    loading: require('./assets/images/default.svg')
});
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    next();
});


router.afterEach(route => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>'
// });
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');