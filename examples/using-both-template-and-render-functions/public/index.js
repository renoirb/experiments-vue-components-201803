import {
  createVueInstance,
  handleFetchResolve,
  handleFetchReject,
} from './common.js'

import TopLevel from './components/top-level.js'

/**
 * For example, add a new page using the Developer Tools Console
 *
 * ```js
 * vueRootInstance.$store.state.pages.rows.push({"title": "How Much Wood could a WoodChudk chuck. If a WoodChuck Could Chuck Wood?", "href": "index.html"})
 * ```
 */

export default (async function() {
  const dataSource = await fetch('./index.json')
    .then(handleFetchResolve)
    .catch(handleFetchReject)

  const modules = {
    pages: {
      namespaced: true,
      state: {
        rows: dataSource.data.examples || [],
      },
    },
  }

  const components = {
    'top-level': TopLevel,
  }

  const rootInstance = await createVueInstance({
    modules,
    components,
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
