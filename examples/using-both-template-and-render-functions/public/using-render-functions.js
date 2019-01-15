import { createVueInstance, keyify } from './common.js'

class ViewModel {
  constructor(rows) {
    this.rows = [...rows]
    // this.current = Object.create(null)
    // this.currentRowIndex = null
  }
  /*
  setCurrentBy (propName, id) {
    let foundIndexes = []
    const matchingRows = [].filter.call(this.rows, (element, index) => {
      const hasMatch = element[propName] === id
      if (hasMatch) {
        foundIndexes.push(index)
      }
      return hasMatch
    })
    if (matchingRows.length > 0) {
      const current = this.rows[foundIndexes[0]]
      Object.assign(this.current, {...current})
    }

    return [...foundIndexes]
  }
  */
}

const ViewModelComponent = {
  name: 'view-model-component',
  functional: true,
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    selectedRow: {
      type: Number,
      default: 0,
    },
    futureTechnicalDebt: {
      type: Boolean,
      default: true,
    },
  },
  // https://vuejs.org/v2/guide/render-function.html#Functional-Components
  render(createElement, { children, data, props }) {
    const selectedRow = props.selectedRow || 0
    const rows = props.rows
    const current = rows[selectedRow]

    // Since btoa will change at any time the row changes, that should work
    // Change it. But that's not a proper way to do this anyway.
    //
    // ```
    // window.globalVue.$set(window.globalVue.$data.requests.rows[0], "patate", 'Pouelle')
    // ```

    const variant = props.futureTechnicalDebt ? 'v-list' : 'dl'
    const key = keyify({ variant, ...current })

    children.push(
      createElement(DefinitionList, {
        attrs: {
          row: current,
          variant,
        },
        props,
        key,
      })
    )

    return createElement('section', data, children)
  },
}

const DefinitionList = {
  name: 'definition-list',
  render(createElement) {
    const variant = this.variant

    const children = []

    const variantVNodeData = {
      key: variant,
    }

    if (variant === 'v-list') {
      variantVNodeData.props = {
        // https://github.com/vuetifyjs/vuetify/blob/v1.0.19/src/components/VList/VList.js#L41
        twoLine: true,
      }
    }

    const keys = Object.keys(this.row)
    keys.forEach(propName => {
      const value = Reflect.has(this.row, propName)
        ? Reflect.get(this.row, propName)
        : this.row[propName]

      // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
      const titleElementVNodeData = {
        key: keyify(value),
      }

      if (variant === 'v-list') {
        children.push(
          createElement(
            'v-list-tile',
            {
              on: {
                click(mouseEvent) {
                  const { parentNode = null } = mouseEvent.target
                  let message = 'v-list-tile @click'
                  if (parentNode !== null) {
                    message += ` ${parentNode.textContent}`
                  }
                  console.log(message, parentNode)
                },
              },
              ...titleElementVNodeData,
            },
            [
              createElement('v-list-tile-content', [
                createElement('v-list-tile-title', `${propName}`),
                createElement('v-list-tile-sub-title', `${value}`),
              ]),
            ]
          )
        )
      } else {
        children.push(
          createElement('dt', titleElementVNodeData, [`${propName}`])
        )
        children.push(createElement('dd', [`${value}`]))
      }
    })

    return createElement(variant, variantVNodeData, children)
  },
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
    variant: {
      type: String,
      default: 'v-list',
    },
  },
}

export const createFixture = (prop = null) => {
  /**
   * Instead, maybe:
   * - https://github.com/mobxjs/serializr
   * - https://github.com/node-modules/serialize-json
   * - https://dev.to/stereobooster/json-json-json-4ed7
   */
  const SomeUnpretictableIdKeyNameID = 'f6dde602-9e36-42a6-9688-f50ea9e8c07b'
  const progress = 98
  const subject_id = '0114794b-2dcd-4e79-9875-ba06a0220331'
  const subject_type = 'SomeForeignRelationObjectType'
  const MyCoolUserName = 'canary'
  const CreationDate = 1515174120
  const status = 3

  const data = {
    SomeUnpretictableIdKeyNameID,
    progress,
    subject_id,
    subject_type,
    MyCoolUserName,
    CreationDate,
    status,
  }

  // For key mapping. Not included here just yet.
  const paths = [
    'SomeUnpretictableIdKeyNameID',
    'MyCoolUserName',
    'CreationDate',
  ]
  const fields = ['id', 'name', 'created_at']

  const fixture = {
    paths,
    fields,
    data,
  }

  if (
    typeof prop === 'string' &&
    Object.keys(fixture).includes(prop) === false
  ) {
    const message = `Invalid argument`
    throw new Error(message)
  }

  return prop === null ? fixture : Reflect.get(fixture, prop)
}

export default (async function() {
  const { paths, fields, ...fixture } = createFixture()

  const rows = []
  rows.push(fixture.data)

  const computed = {
    title() {
      const firstName = this.$data.user.firstName
      const lastName = this.$data.user.lastName

      const names = [firstName, lastName]
      const title = `Hello, ${names.join(' ')}. Here is a Dynamic title.`

      return title
    },
  }

  // https://vuejs.org/v2/guide/events.html#Method-Event-Handlers
  const methods = {
    onInputChange(event) {
      const target = event.target
      const value = target.value
      console.log('onInputChange', value)
    },
  }

  const modules = {
    requests: {
      namespaced: true,
      state: {
        rows,
      },
    },
  }

  const components = {
    'top-level': ViewModelComponent,
  }

  // Since its the root vue instance, we can use data as a property here.
  const data = {
    dark: false,
    variantBool: true,
    user: {
      firstName: 'John',
      lastName: 'Doe',
    },
  }

  const rootInstance = await createVueInstance({
    computed,
    methods,
    modules,
    components,
    data,
  })

  rootInstance.$mount('#root')
  rootInstance.$nextTick(() => {
    const rootElement = document.getElementById('app') || null
    if (rootElement !== null) {
      rootElement.removeAttribute('hidden')
    }
  })

  const w = window || null
  if (typeof w !== null) {
    w.vueRootInstance = rootInstance
    console.info(
      'Check what is available in window.vueRootInstance',
      Object.keys(w.vueRootInstance)
    )
  }
})()
