import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/sass/materialize.scss'
import '@/assets/css/dayshmookh.layout.css'
import '@/assets/style.scss'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
