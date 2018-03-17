import Vue from 'vue'
import App from './App'
import VuePlugin from './lib'

Vue.config.productionTip = false

Vue.use(VuePlugin)

new Vue({
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
