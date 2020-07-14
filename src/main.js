// for vuex
import 'es6-promise/auto';

import Vue from 'vue';
import App from '@/components/App';
import routes from '@/router';
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/variables.scss';
import http from './config/http';


const router = routes(store);

Vue.use(ElementUI);
Vue.config.productionTip = false;
http(store, router);

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
