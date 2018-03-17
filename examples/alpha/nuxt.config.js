module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Demo Usage @renoirb/experiments-vue-components-201803',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Essai de ma propre librairie' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.rawgit.com/renoirb/experiments-vue-components-201803/master/lib/UneLibrairie.css' }
    ]
  },
  plugins: [
    '~/plugins/main.js'
  ],
  vendor: [
    '~/plugins/main.js'
  ]
}
