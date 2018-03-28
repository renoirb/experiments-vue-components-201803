<template>
  <v-layout
    row
    wrap
  >
    <v-flex>
      <v-card>
        <v-card-title
          v-if="showTitle"
          primary-title
        >
          <h2>{{ title }}</h2>
          <v-spacer />
          <slot name="top" />
        </v-card-title>
        <section
          class="card__main"
        >
          <slot />
        </section>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  VLayout,
  VFlex,
  VSpacer,
} from 'vuetify/es5/components/VGrid'
import VCard from 'vuetify/es5/components/VCard'

// @vue/component
export default {
  name: 'u-layout-row-card',
  props: {
    title: {
      type: [
        String,
        null,
      ],
      default: null,
    },
  },
  computed: {
    showTitle () {
      return typeof this.title === 'string'
    },
  },
  components: {
    VLayout,
    VFlex,
    VSpacer,
    VCard,
  },
}
</script>
