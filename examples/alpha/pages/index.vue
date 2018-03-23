<template>
  <div>
    <uexpansion-panel-list
      class="mb-3"
      :panels="panels"
    />
    <v-card
      class="mt-3"
    >
      <v-card-media
        src="https://lorempixel.com/420/320/abstract"
        height="200px"
      />
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Lorem</h3>
          <div v-html="panels[0].contents"></div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
const data = {
  panels: [
    {
      label: 'Lorem Ipsum',
      key: 'panneau0',
      contents: '<p>Lorem ipsum dolor sit amet, cum ad expetendis incorrupte, cu option singulis vix, pro summo omnium constituto ea.</p>'
    },
    {
      label: 'Un autre panneau',
      key: 'panneau',
      contents: '<p>Contenu du panneau</p>',
    }
  ]
}
export default {
  layout: 'default',
  data: () => ({
    ...data,
  })
}
</script>
