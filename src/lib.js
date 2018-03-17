
/**
 * Attempting exporting subset of Vuetify.js
 *
 * https://github.com/vuetifyjs/vuetify/issues/3035
 * https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md
 */

import * as components from '@/components'
//import '@/stylus/theme.stylus'
require('../node_modules/vuetify/src/stylus/app.styl')

function UneLibrairie (Vue, args) {
  const Vuetify = components.Vuetify

  Vue.use(Vuetify, {
    components,
    theme: {
      'primary': '#2C3E50',
      'secondary': '#95a5a6',
      'accent': '#f2a200',
      'error': '#E74C3C',
      'warning': '#F39C12',
      'info': '#3498DB',
      'success': '#18BC9C',
      'hotpink': '#ff69b4'    
    },
    ...args
  })
}

UneLibrairie.version = '8947894372891'

if (typeof window !== 'undefined' && window.Vue) {
  console.log('Window.Vue exists, so we invoked it. Would that be OK? Lets figure it out by trial and error.')
  window.Vue.use(UneLibrairie)
}

export default UneLibrairie
