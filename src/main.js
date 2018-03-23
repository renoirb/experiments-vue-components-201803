import Vue from 'vue'
import Demo from './Demo'
import VuePlugin from './lib'

Vue.config.productionTip = false

Vue.use(VuePlugin)

new Vue({
  components: {
    Demo
  },
  render: h => h(Demo)
}).$mount('#app')
