import ListOfLinks from './list-of-links.js'
import { keyify } from '../common.js'

export default {
  name: 'top-level',
  functional: true,
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
  },
  // https://vuejs.org/v2/guide/render-function.html#Functional-Components
  render(h, { children, data, props }) {
    const rows = props.rows

    const key = keyify({ rows })

    children.push(
      h(ListOfLinks, {
        attrs: {
          rows,
        },
        props,
        key,
      })
    )

    return h('section', data, children)
  },
}
