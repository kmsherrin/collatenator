import Vue from 'vue'
import Router from 'vue-router'

import Home from "./pages/Home.vue"
import Configure from "./pages/Configure.vue"

const routes = [
  {
    path: '/',
    component: Home.default
  },

  {
    path: '/configure',
    component: Configure.default 
  }
]

const router = new Router({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  render: h => h(Home),
  router,
}).$mount('#app')
