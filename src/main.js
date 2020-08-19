import Vue from 'vue'
import routes from './routes'

const vue_app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue')
    }
  },
  
  render(h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  vue_app.currentRoute = window.location.pathname
})
