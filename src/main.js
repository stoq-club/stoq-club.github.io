import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/sass/materialize.scss'
import '@/assets/css/dayshmookh.layout.css'
import '@/assets/style.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
