// https://jsramblings.com/2016/11/09/use-es6-modules-in-the-browser-today-with-systemjs.html
// Configure the SystemJS module loader
SystemJS.config({
  // Tell it that our javascript files are in the /js folder
  baseURL: '/',
  // Tell it to apply Babel to our JS files
  transpiler: 'plugin-babel',
  // Configure the Babel plugin - it's basically just telling it where to read the files from - in our case, they're in node_modules
  map: {
    'plugin-babel':
      'https://cdn.jsdelivr.net/npm/systemjs-plugin-babel@0.0.25/plugin-babel.js',
    'systemjs-babel-build':
      'https://cdn.jsdelivr.net/npm/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
    // https://github.com/vuejs/vue/issues/3948#issuecomment-253971484
    vue: 'https://cdn.jsdelivr.net/gh/vuejs/vue@2.5.22/dist/vue.common.js',
    vuex: 'https://cdn.jsdelivr.net/gh/vuejs/vuex@v3.0.1/dist/vuex.esm.js',
    'vuex-logger':
      'https://cdn.jsdelivr.net/gh/vuejs/vuex@v3.0.1/dist/logger.js',
    'core-js-shim': 'https://unpkg.com/core-js/client/shim.min.js',
    'data-model': 'packages/data-model/dist/index.js',
    '@babel/runtime': 'node_modules/@babel/runtime',
    UneLibrairie:
      'https://gitcdn.xyz/repo/renoirb/experiments-vue-components-201803/v1.0.0-alpha.0/lib/UneLibrairie.umd.min.js',
  },
})
SystemJS.import('plugin-babel')
SystemJS.import('systemjs-babel-build')
