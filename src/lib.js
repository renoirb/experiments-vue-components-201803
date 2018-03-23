
/**
 * Attempting exporting subset of Vuetify.js
 *
 * https://github.com/vuetifyjs/vuetify/issues/3035
 * https://github.com/vuejs/vue-cli/blob/dev/docs/build-targets.md
 */

import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VDataIterator from 'vuetify/es5/components/VDataIterator'
import VDataTable from 'vuetify/es5/components/VDataTable'
import VDivider from 'vuetify/es5/components/VDivider'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VFooter from 'vuetify/es5/components/VFooter'
import VForm from 'vuetify/es5/components/VForm'
import VList from 'vuetify/es5/components/VList'
import VBtn from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VIcon from 'vuetify/es5/components/VIcon'
import VGrid from 'vuetify/es5/components/VGrid'
import VTabs from 'vuetify/es5/components/VTabs'
import VToolbar from 'vuetify/es5/components/VToolbar'
import transitions from 'vuetify/es5/components/transitions'
import VueMarkdown from 'vue-markdown'

import {
  UCopyrightLinks,
  UExpansionPanelList,
  ULayoutRowCard,
  UNavigationFooter,
  UPageFooter,
  UPrettifyJson,
  UProse,
  UToolbarCard
} from '@/components'

// import '@/stylus/theme.stylus'
import '../node_modules/vuetify/src/stylus/app.styl'

const components = {
  UCopyrightLinks,
  UExpansionPanelList,
  ULayoutRowCard,
  UNavigationFooter,
  UPageFooter,
  UPrettifyJson,
  UProse,
  UToolbarCard
}

const imported = {
  VApp,
  VDataIterator,
  VDataTable,
  VDivider,
  VNavigationDrawer,
  VFooter,
  VForm,
  VList,
  VBtn,
  VCard,
  VIcon,
  VGrid,
  VToolbar,
  VTabs,
  transitions
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

const VuePlugin = {
  install (Vue) {
    for (const [
      // eslint-disable-next-line
      className,
      component
    ] of Object.entries(components)) {
      Vue.component(component.name, component)
    }
    Vue.use(Vuetify, {
      components: {
        ...imported
      },
      theme
    })
    Vue.use(VueMarkdown)
  }
}

export default VuePlugin

export {
  Vuetify,
  VApp,
  VDataIterator,
  VDataTable,
  VDivider,
  VNavigationDrawer,
  VFooter,
  VForm,
  VList,
  VBtn,
  VCard,
  VIcon,
  VGrid,
  VToolbar,
  VTabs,
  UCopyrightLinks,
  UExpansionPanelList,
  ULayoutRowCard,
  UNavigationFooter,
  UPageFooter,
  UPrettifyJson,
  UProse,
  UToolbarCard
}
