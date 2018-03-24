<template>
  <div
    :class="[classes]"
  >
    <a
      :href="productUrl"
    >
      {{ productName }}
    </a>
    &nbsp;
    &copy;
    &nbsp;
    {{ firstYear }}-{{ year }}
    &nbsp;
    <a
      :href="publisherUrl"
    >
      {{ publisherName }}
    </a>
  </div>
</template>

<script>
import Themeable from 'vuetify/es5/mixins/themeable'
import Colorable from 'vuetify/es5/mixins/colorable'

// @vue/component
export default {
  name: 'u-copyright-links',
  mixins: [
    Colorable,
    Themeable,
  ],
  props: {
    productName: {
      type: String,
      default: 'CatFacts',
    },
    productUrl: {
      type: String,
      default: 'http://www.catfacts.co/',
    },
    publisherName: {
      type: String,
      default: 'PiedPiper',
    },
    publisherUrl: {
      type: String,
      default: 'http://www.piedpiper.com/',
    },
    firstYear: {
      type: Number,
      default: 1998,
    },
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    classes () {
      /**
       * Here, we're using Vuetify's mixins.
       * So we can see how to leverage them
       * in our own components.
       */
      const classes = Object.assign(
        {
          'u-copyright-links--component': true,
          'text-xs-center': true,
          'pa-1': true,
          'accent--text': true,
          'theme--dark': this.dark,
          'theme--light': this.light,
        },
        this.color
          ? Colorable.methods.addTextColorClassChecks.call(this, {}, this.color)
          : {}
      )

      return classes
    },
  },
}
</script>
