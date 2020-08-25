import Vue from 'vue'
import Router from 'vue-router'

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

import VueShowdown from "vue-showdown";
Vue.use(VueShowdown)

import Home from "./pages/Home.vue"
import Configure from "./pages/Configure.vue"
import History from "./pages/History.vue"
import Groceries from "./pages/Groceries.vue"
import App from "./App.vue"
import NoExist from "./pages/404.vue"

Vue.use(Router);


const routes = [
  {
    path: '*',
    component: NoExist,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/configure',
    component: Configure,
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/groceries',
    component: Groceries,
  }

]


const router = new Router({
  mode: 'history',
  routes // short for `routes: routes`
})


new Vue({
  el: "#app",
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
