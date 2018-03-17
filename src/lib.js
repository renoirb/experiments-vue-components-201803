
/**
 * Attempting exporting subset of Vuetify.js
 *
 * https://github.com/vuetifyjs/vuetify/issues/3035
 * https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md
 */

import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VFooter from 'vuetify/es5/components/VFooter'
import VList from 'vuetify/es5/components/VList'
import VBtn from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VIcon from 'vuetify/es5/components/VIcon'
import VGrid from 'vuetify/es5/components/VGrid'
import VToolbar from 'vuetify/es5/components/VToolbar'

import {
  UCopyrightLinks,
  UToolbarCard,
  UExpansionPanelList
} from '@/components'

import App from '@/App.vue'

// import '@/stylus/theme.stylus'
import '../node_modules/vuetify/src/stylus/app.styl'

const components = {
  App,
  UCopyrightLinks,
  UToolbarCard,
  UExpansionPanelList
}

const imported = {
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VCard,
  VIcon,
  VGrid,
  VToolbar
}

const theme = {
  'primary': '#2C3E50',
  'secondary': '#95a5a6',
  'accent': '#f2a200',
  'error': '#E74C3C',
  'warning': '#F39C12',
  'info': '#3498DB',
  'success': '#18BC9C',
  'hotpink': '#ff69b4'
}

function camelCaseToDash ( myStr ) {
  return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

const VuePlugin = {
  install (Vue) {
    Vue.use(Vuetify, {
      components: {
        ...imported
      },
      theme
    })
    for (const className in components) {
      let outcome = 'Could not register'
      try {
        console.log(className)
        const component = components[className]
        const name = camelCaseToDash(component.name || className)
        Vue.component(name, component)
        outcome = `Registered ${name} for`;
      } catch (e) {
        /* Not failing */
      }
      console.log(`${outcome} component ${className}`)
    }
  }
}

export default VuePlugin

export {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VCard,
  VIcon,
  VGrid,
  VToolbar,
  UCopyrightLinks,
  UToolbarCard,
  UExpansionPanelList
}
