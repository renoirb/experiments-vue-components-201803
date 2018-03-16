<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <u-toolbar-card
            title="Developing Vue.js components"
          >

            <h3>Card contents</h3>
            <img src="https://lorempixel.com/420/320/abstract" />

            <u-expansion-panel-list
              :opened="1"
              :panels="panels"
            />

            <div slot="actions">
              <v-btn>
                <v-icon>assignment_turned_in</v-icon>
                Submit
              </v-btn>
            </div>
          </u-toolbar-card>
          <u-copyright-links
            :firstYear="1978"
          />
        </v-container>
      </v-content>
    </v-app>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
</style>

<script>
import {
  UCopyrightLinks,
  UToolbarCard,
  UExpansionPanelList
} from './components'


const data = {
  panels: [
    {
      label: 'Hello world',
      key: 'hello-world',
      contents: '<p>Hello</p>',
    },
    {
      label: 'Second panel',
      key: 'second-panel',
      contents: '<p>...</p>',
    }
  ]
}

export default {
  name: 'app',
  data: () => ({
    ...data,
  }),
  components: {
    UCopyrightLinks,
    UToolbarCard,
    UExpansionPanelList
  }
}
</script>
