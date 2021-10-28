import Vue from 'vue'
import App from './App.vue'
import './plugins/vant.js'
import router from './router'
import './directives/price'
import './mixins'
import './filters/datefmt'
import store from './store'
// import directivePrice from './directives/price'
// directivePrice(Vue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
