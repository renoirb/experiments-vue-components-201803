<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-btn
            icon
          >
            <v-icon>menu</v-icon>
          </v-btn>
          <foo-branding />
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
  FooBranding
} from './components'

export default {
  name: 'app',
  components: {
    FooBranding
  }
}
</script>
