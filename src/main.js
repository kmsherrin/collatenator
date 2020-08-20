import Vue from 'vue'
import Router from 'vue-router'

import Home from "./pages/Home.vue"
import Configure from "./pages/Configure.vue"
import App from "./App.vue"

Vue.use(Router);


const routes = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/configure',
    component: Configure,
  }
]


const router = new Router({
  routes // short for `routes: routes`
})


new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app')
