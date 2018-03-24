<template>
  <div
    :class="[classNames]"
  >
    <v-toolbar
      color="primary"
    >
      <v-toolbar-title
        class="white--text"
      >
        <v-icon
          color="white"
          v-text="icon"
        />
        <span>
          {{ title }}
        </span>
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <slot>
          Card contents goes here
        </slot>
      </v-card-text>
      <v-card-actions>
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import VToolbar from 'vuetify/es5/components/VToolbar'
import VCard from 'vuetify/es5/components/VCard'

const classNames = ['u-toolbar-card--component']

// @vue/component
export default {
  name: 'u-toolbar-card',
  props: {
    icon: {
      type: String,
      default: 'menu',
    },
    title: {
      type: String,
      default: 'Card Title',
    },
  },
  data: () => ({
    classNames,
  }),
  components: {
    VToolbar,
    VCard,
  },
}
</script>
