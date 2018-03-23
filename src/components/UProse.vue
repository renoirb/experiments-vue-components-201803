<template>
  <div
    class="u-prose--component"
  >
    <component
      :is="currentType"
    >
<slot/>
    </component>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const ProseHtml = {
  render (h) {
    return h('div', {
      class: {
        'u-prose-html': true,
      },
    },
    this.$slots.default)
  },
}

// @vue/component
export default {
  name: 'u-prose',
  props: {
    markdown: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
    currentType () {
      return this.markdown ? 'markdown' : 'markup'
    },
  },
  components: {
    markdown: VueMarkdown,
    markup: ProseHtml,
  }
}
</script>

<style>
.u-prose--component {
  padding: 5px;
}
.u-prose--component ul,
.u-prose--component ol {
  margin-bottom: 15px;
}
.u-prose--component li {
  margin-left: 15px;
}
</style>
