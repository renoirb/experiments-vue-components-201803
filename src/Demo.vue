<template>
  <div id="demo">
    <v-app>
      <v-content>
        <v-container>
          <u-toolbar-card
            title="UneLibrarie Demo"
          >
            <u-expansion-panel-list
              :opened-index="1"
              :panels="panels"
            />
            <u-prose>

### u-prose component

This is `markdown` **passed in** as _string_ inside a `&lt;slot /&gt;`.


            </u-prose>
            <u-prose
              :markdown="false"
            >

<h3>u-prose component<small>[markdown=false]</small></h3>
<p>And this is HTML.</p>

            </u-prose>
            <div slot="actions">
              <v-btn>
                <v-icon>assignment_turned_in</v-icon>
                Soumettre
              </v-btn>
            </div>
          </u-toolbar-card>
          <u-page-footer 
            :navigation-footer="footer" 
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
  UExpansionPanelList,
  UNavigationFooter,
  UProse,
  UToolbarCard
} from './components'

/** *********************** lib/demo.html script tag copy-pasta BEGIN *********************** */
const data = {
  panels: [
    {
      label: 'Hello',
      key: 'hello-world',
      contents: '<p>World!</p>',
    },
    {
      label: 'Deuxième panneau',
      key: 'deuxieme-panneau',
      contents: '<p>Contenu du second panneau</p>',
    }
  ],
  footer: [
    {
      label: 'HTTP Cat',
      href: 'https://http.cat/'
    },
    {
      label: 'Fork-me on GitHub',
      href: 'https://github.com/renoirb/experiments-vue-components-201803'
    }
  ]
}
/** *********************** lib/demo.html script tag copy-pasta END *********************** */

export default {
  name: 'demo',
  data: () => ({
    ...data,
  }),
  components: {
    UCopyrightLinks,
    UExpansionPanelList,
    UNavigationFooter,
    UProse,
    UToolbarCard
  }
}
</script>
