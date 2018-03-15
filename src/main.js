require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import App from './App'

/**
 * Attempting exporting subset of Vuetify.js
 *
 * https://github.com/vuetifyjs/vuetify/issues/3035
 * https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md
 */
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  FooBranding
} from './components'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    FooBranding
  },
  theme: {
    primary: '#2C3E50',
    secondary: '#95a5a6',
    accent: '#f2a200',
    error: '#E74C3C',
    warning: '#F39C12',
    info: '#3498DB',
    success: '#18BC9C',
    hotpink: '#ff69b4'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
