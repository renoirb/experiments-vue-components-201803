import Vue from 'vue'
import VuePlugin from './lib'
import Demo from './Demo.vue'

/**
 * That should be used for the demo.
 *
 * https://unpkg.com/vue@2.5.16/dist/
 * https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d
 */

Vue.config.productionTip = false

Vue.use(VuePlugin)

new Vue({
  components: {
    Demo
  },
  render: h => h(Demo)
}).$mount('#app')

/**
 * DEMO Setup
 *
 *
 * In lib/demo.html, reorganize the markup like the following;
 *
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>UneLibrairie demo</title>
    <script src="https://unpkg.com/vue"></script>
    <script src="./UneLibrairie.umd.js"></script>
    <link rel="stylesheet" href="./UneLibrairie.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id="app"></div>
    <script type="text/x-template" id="template">

    *********************** PUT WHAT'S IN template tag of Demo.vue ***********************

    </script>
    <script>
    Vue.config.productionTip = false
    Vue.use(UneLibrairie)

    *********************** PUT WHAT'S IN script tag of Demo.vue copy-pasta ***********************

    window.vm = new Vue({
      template: '#template',
      data: () => ({
        ...data,
      }),
    }).$mount('#app')
    </script>
  </body>
</html>
*/