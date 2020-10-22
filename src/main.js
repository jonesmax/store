
import './firebase';
import Vue from 'vue'
import App from './App.vue'
import * as VueFire from 'vuefire';
// import VueRouter from 'vue-router'

// import store from './components/store.vue'
// import Home from './components/Home.vue'

// Vue.use(VueRouter)
Vue.use(VueFire);

Vue.config.productionTip = false

// const routes = [
//   { path: '/', component: Home },
//   { path: '/store', component: store }
// ]

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

new Vue({
  render: h => h(App),
}).$mount('#app')

