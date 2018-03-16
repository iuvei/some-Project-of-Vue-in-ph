import './common/js/rem.js'
import Vue from 'vue'
import App from './App'
import './common/css/reset.css'
import router from './router'
import fastclick from 'fastclick'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUi)

import filter from './api/filters'

Vue.config.productionTip = false


window.eventBus = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})

