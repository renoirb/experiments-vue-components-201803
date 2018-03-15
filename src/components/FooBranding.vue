<template>
  <div :class="[classNames]">
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
const classNames = ['grey', 'lighten-4', 'elevation-4'];

// @vue/component
export default {
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
  data: () => ({
    classNames,
  }),
  computed: {
    year: () => new Date().getFullYear(),
  },
};
</script>