import Vue from 'vue'

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

const rootComponentsList = []

rootComponentsList.push({
  name: 'top-level',
  functional: true,
  props: {
    viewModel: {
      type: [ViewModel, Object],
      default: () => new ViewModel(),
    },
    futureTechnicalDebt: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    DefinitionList,
  },
  // https://vuejs.org/v2/guide/render-function.html#Functional-Components
  render: function(createElement, { children, data, props }) {
    const currentRowIndex = 0

    const m = props.viewModel
    const row = m.rows[currentRowIndex]

    // Since btoa will change at any time the row changes, that should work
    // Change it. But that's not a proper way to do this anyway.
    //
    // ```
    // window.globalVue.$set(window.globalVue.$data.requests.rows[0], "patate", 'Pouelle')
    // ```

    const variant = props.futureTechnicalDebt ? 'v-list' : 'dl'
    const key = btoa(JSON.stringify({ variant, ...row }))
    console.log('top-level render', variant, key)

    children.push(
      createElement(DefinitionList, {
        attrs: {
          row,
          variant,
        },
        props,
        key,
      })
    )

    return createElement('section', data, children)
  },
})

const keyify = w => btoa(String(w))

const DefinitionList = {
  name: 'definition-list',
  render(createElement) {
    const variant = this.variant

    const children = []

    console.log('definition-list render', variant)
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
  const id = 'f6dde602-9e36-42a6-9688-f50ea9e8c07b'
  const progress = 98
  const subject_id = '0114794b-2dcd-4e79-9875-ba06a0220331'
  const subject_type = 'SomeForeignRelationObjectType'
  const name = 'canary'
  const CreationDate = 1515174120
  const Status = 'InProgress'
  const UserUniqueName = 'owner@example.org'
  const RequestType = 'CompleteServiceProvisioning'
  const Class = 'ServiceProvisioningClass'

  const data = {
    id,
    progress,
    subject_id,
    subject_type,
    name,
    CreationDate,
    Status,
    UserUniqueName,
    RequestType,
    Class,
  }

  const paths = ['subject_id', 'name', 'CreationDate']
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

function bootstrap() {
  const { paths, fields, ...fixture } = createFixture()

  const requests = {
    rows: [fixture.data],
  }

  // Since its the root vue instance, we can use data as a property here.
  const data = {
    dark: false,
    variantBool: true,
    user: {
      firstName: 'John',
      middleName: 'A',
      lastName: 'Doe',
    },
    requests,
  }

  // https://vuejs.org/v2/api/#productionTip
  Vue.config.productionTip = false

  rootComponentsList.forEach(c => Vue.component(c.name, c))
  Vue.use(UneLibrairie)

  /**
   * Notice that UneLibrairie packages Vuetify v 1.0
   *
   * See:
   * - https://github.com/vuetifyjs/vuetify/tree/v1.0.19
   * - https://cdn.jsdelivr.net/npm/vuetify@1.0.19/dist/vuetify.min.js
   * - https://cdn.jsdelivr.net/npm/vuetify@1.0.19/dist/vuetify.css
   *
   * See UneLibrairie manifest: https://github.com/renoirb/experiments-vue-components-201803/blob/master/src/lib.js#L8
   */

  // The Root Vue Instance
  const rootInstance = new Vue({
    el: '#app',
    data,
    computed: {
      title() {
        const firstName = this.user.firstName || ''
        const lastName = this.user.lastName || ''

        const fullName = [firstName, lastName]

        return `Hello ${fullName.join(' ')} !`
      },
      // currentViewModel() {
      //   // See comment in createFixture
      //   const list = this.$data['requests'].rows
      //   return new ViewModel(list)
      // }
    },
  })

  const w = window || null
  if (typeof w !== null) {
    w.globalVue = rootInstance
    console.info(
      'Check what is available in window.globalVue',
      Object.keys(w.globalVue)
    )
  }
}

export default bootstrap()
