<template>
  <v-card
    :class="[classNames]"
  >
    <v-card-title
      v-if="title"
      v-text="title"
    />
    <pre
      style="word-break: break-all !important;"
      class="text-lg-left m-4"
    >
{{ stringified }}
    </pre>
  </v-card>
</template>

<script>
const classNames = [
  'u-prettify-json--component',
]

// @vue/component
export default {
  name: 'u-prettify-json',
  props: {
    object: {
      type: [
        Object,
        String,
        Array,
        Boolean,
      ],
      default: () => ({}),
    },
    title: {
      type: [
        String,
        null,
      ],
      default: null,
    },
  },
  data: () => ({
    classNames,
  }),
  computed: {
    stringified () {
        return JSON.stringify(this.object, null, 4)
    }
  },
}
</script>
