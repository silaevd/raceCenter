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
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';


const router = routes(store);

Vue.use(ElementUI);
VMdEditor.use(githubTheme);
Vue.use(VMdEditor);
VMdEditor.lang.use('en-US', enUS);
Vue.config.productionTip = false;
http(store, router);

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
