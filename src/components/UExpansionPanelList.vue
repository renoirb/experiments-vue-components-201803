<template>
  <v-expansion-panel
    class="u-expansion-panel-list--component"
    v-model="opened"
  >
    <v-expansion-panel-content
      v-for="(item, i) in panels"
      :key="i"
      :value="i==opened"
    >
      <h2
        slot="header"
      >
        {{ item.label }}
      </h2>
      <v-card>
        <v-card-text
          class="u-expansion-panel-list--children"
          v-html="item.contents"
        />
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>

import {
  VExpansionPanel,
  VExpansionPanelContent
} from 'vuetify/es5/components/VExpansionPanel/index.js'

// @vue/component
export default {
  name: 'UExpansionPanelList',
  props: {
    opened: {
      type: Number,
      default: 0
    },
    panels: {
      type: Array,
      default: () => ([
        {
          label: 'Hello',
          key: 'hello',
          contents: '...'
        }
      ])
    }
  },
  components: {
    VExpansionPanel,
    VExpansionPanelContent
  },
}
</script>
