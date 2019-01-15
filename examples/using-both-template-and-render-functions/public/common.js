import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex-logger'

import UneLibrairie from 'UneLibrairie'

/**
 * Simple Vuex store module example
 * Copy-pasta from Vuex source example
 * {@link https://github.com/vuejs/vuex/blob/1.0/examples/counter/store.js}
 * {@link https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/modules/cart.js}
 */
const example = {
  namespaced: true,
  state: {
    counter: 0,
    title: 'Sample Vue.js App',
    links: [
      {
        label: 'Fork-me on GitHub',
        href: 'https://github.com/renoirb/experiments-vue-components-201803/tree/master/examples/using-both-template-and-render-functions',
      },
    ],
    productName: 'Example Vue.js App',
    productUrl:
      'http://renoirb.com/article-support/2018-experiments-vue-components',
    publisherName: 'Renoir Boulanger',
    publisherUrl: 'http://renoirb.com/',
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
      if ((state.counter + 1) % 2 === 0) {
        commit('increment')
      }
    },
    incrementAsync({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
  },
  getters: {
    evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
  },
}

export const handleFetchResolve = response => {
  const status = response.status || 500
  if (status < 300) {
    const data = response.json()
    return data
  }
  const message = `Invalid response received from ${response.url}`
  throw new Error(message)
}

export const handleFetchReject = error => {
  console.error(`${String(error.message)}`, error)
  // Empty data.
  return { data: {}, error: error }
}

export const keyify = anything =>
  /^(\[|{)"?/.test(anything)
    ? btoa(JSON.stringify(anything))
    : btoa(String(anything))

export async function createVueInstance({
  computed = {},
  methods = {},
  modules = {},
  components = {},
  data = {},
}) {
  const debug = process.env.NODE_ENV !== 'production'

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
  Vue.use(UneLibrairie)

  Vue.use(Vuex)

  for (const [name, component] of Object.entries(components)) {
    Vue.component(name, component)
  }

  // https://vuejs.org/v2/api/#productionTip
  // https://github.com/vuejs/vue/blob/2.6/dist/vue.runtime.js#L365
  Vue.config.productionTip = false

  const store = new Vuex.Store({
    modules: {
      example,
      ...modules,
    },
    strict: true,
    plugins: [createLogger()],
  })

  // The Root Vue Instance
  const rootInstance = new Vue({
    computed,
    methods,
    store,
    data,
    debug: true,
  })

  return rootInstance
}
