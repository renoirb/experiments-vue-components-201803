<template>
  <v-footer
    app
    fixed
    height="auto"
    :class="[classNames]"
  >
    <v-layout
      row
      wrap
      justify-center
    >
      <slot>
        <u-copyright-links />
      </slot>
      <u-navigation-footer
        :items="navigationFooter"
      />
    </v-layout>
  </v-footer>
</template>

<script>
import UNavigationFooter from './UNavigationFooter.vue'
import UCopyrightLinks from './UCopyrightLinks.vue'

const classNames = [
  'u-page-footer--component',
]

// @vue/component
export default {
  name: 'u-page-footer',
  props: {
    navigationFooter: {
      default: null,
      type: [
        Array,
        null,
      ],
    },
  },
  data: () => ({
    classNames,
  }),
  components: {
    UNavigationFooter,
    UCopyrightLinks,
  },
}
</script>

<style>
.u-copyright-links--component + .u-navigation-footer--component {
    margin-left: 10px;
}
</style>