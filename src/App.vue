<template>
  <div id="app">
    <v-btn
      icon
    >
      <v-icon>menu</v-icon>
    </v-btn>
    <foo-branding />
  </div>
</template>
<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
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
