<template>
  <v-expansion-panel
    :class="[classNames]"
    v-model="openedIndex"
  >
    <v-expansion-panel-content
      v-for="(item, i) in panels"
      :key="i"
      :value="i==openedIndex"
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
  VExpansionPanelContent,
} from 'vuetify/es5/components/VExpansionPanel/index.js'

const classNames = ['u-expansion-panel-list--component']

// @vue/component
export default {
  name: 'u-expansion-panel-list',
  props: {
    openedIndex: {
      type: Number,
      default: 0,
    },
    panels: {
      type: Array,
      default: () => [
        {
          label: 'Expansion Panel',
          key: 'expansion-panel',
          contents: '...',
        },
      ],
    },
  },
  data: () => ({
    classNames,
  }),
  components: {
    VExpansionPanel,
    VExpansionPanelContent,
  },
}
</script>
