module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    // https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // https://github.com/vuetifyjs/vue-cli-plugin-vuetify/blob/master/generator/index.js#L110
    if (config.plugins === undefined) {
      config.plugins = []
    }
  }
}
