// for vuex
import 'es6-promise/auto';

import Vue from 'vue';
import App from '@/components/App';
import routes from '@/router';
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/form-item.css';
// import 'element-ui/lib/theme-chalk/carousel.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/variables.scss';
import VueResource from 'vue-resource';

const router = routes(store);

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.interceptors.push(function(request,next){

  request.headers.set('Authorization', 'Bearer TOKEN');

  next(function(response){
    //logging the response body
    console.log(response.body)
  });
})

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
