import { keyify } from '../common.js'

export default {
  name: 'list-of-links',
  render(h) {
    const children = []

    const items = this.rows || []
    items.forEach((currentValue, index) => {
      const title = currentValue.title || null
      const href = currentValue.href || null

      children.push(
        h(
          'li',
          {
            key: keyify(href + index),
          },
          [
            h(
              'a',
              {
                attrs: {
                  href,
                },
              },
              [`${title}`]
            ),
          ]
        )
      )
    })

    return h('ul', children)
  },
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
  },
}
