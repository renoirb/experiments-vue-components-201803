<template>
  <footer
    :class="[classNames]"
  >
    <div class="u-navigation-footer-inner">
      <ol
        v-if="items !== null"
        class="d-flex flex-row justify-content-center m-4"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="p-1">
          <a
            :href="item.href"
            :data-translatable="item.label"
          >
            {{ item.label }}
          </a>
        </li>
      </ol>
    </div>
  </footer>
</template>

<script>

const classNames = [
  'u-navigation-footer--component',
  'text-xs-center',
  'pa-1'
]

// @vue/component
export default {
  name: 'u-navigation-footer',
  props: {
    items: {
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
}
</script>

<style scoped>
footer ol li {
  list-style-type: none;
}
footer li + li:before {
  content: '|';
  margin: 0 5px;
}
</style>
