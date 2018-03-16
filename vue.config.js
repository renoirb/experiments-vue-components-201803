module.exports = {
  lintOnSave: true,
  // css: {
  //   // https://github.com/vuejs/vue-cli/blob/dev/docs/css.md#css-modules
  //   modules: true
  // },
  chainWebpack: config => {
    // https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // https://github.com/vuetifyjs/vue-cli-plugin-vuetify/blob/master/generator/index.js#L110
    // console.log(config)
    if (config.plugins === undefined) {
      config.plugins = []
    }
  }
}
