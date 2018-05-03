// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import "@/lb/_y.css"

import  VueResource  from 'vue-resource'
Vue.use(VueResource) 
Vue.http.options.emulateJSON = true;

import VueAwesomeSwiper from 'vue-awesome-swiper'  
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
