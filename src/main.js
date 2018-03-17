import Vue from 'vue'
import App from './App'
import UneLibrairie from './lib'

Vue.use(UneLibrairie)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
