<template>
  <v-layout
    row
    align-center
    justify-center
  >
    <v-flex
      xs12
      sm8
      class="elevation-5"
    >
      <v-toolbar
        color="primary"
      >
        <v-toolbar-title
          class="white--text"
        >
          <v-icon
            color="white"
          >
            toys
          </v-icon>
          <span>
            {{ title }}
          </span>
        </v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-list
          subheader
        >
          <v-list-group
            v-for="experiment in experiments"
            :key="experiment.title"
          >
            <v-list-tile
              slot="activator"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ experiment.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="subItem in experiment.items"
              :key="subItem.title"
              :href="subItem.href"
              avatar
              tag="a"
            >
              <v-list-tile-avatar>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                {{ subItem.title }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

const experiments = [
  {
    title: 'GraphQL + VueX',
    items: [
      {
        title: 'Code',
        href: 'https://codesandbox.io/embed/1qqv57x81q?view=preview',
        icon: 'code',
      },
      {
        title: 'Demo',
        href: 'https://1qqv57x81q.codesandbox.io/',
        icon: 'launch',
      },
      {
        title: 'GraphQL Data Source',
        href: 'https://launchpad.graphql.com/55ljzmm509',
        icon: 'cloud_circle',
      },
    ],
  },
  {
    title: 'Vue Component as Native CustomElement',
    items: [
      {
        title: 'Code',
        href: 'https://gist.github.com/renoirb/a39069722261328ef23863b9f3df4af0',
        icon: 'code',
      },
      {
        title: 'Demo',
        href: 'https://output.jsbin.com/huburun',
        icon: 'launch',
      },
      {
        title: 'Explanation',
        href: 'https://gist.github.com/renoirb/a39069722261328ef23863b9f3df4af0#gistcomment-2374445',
        icon: 'book',
      },
      {
        title: 'Fun With Flags Demo (native implementation)',
        href: 'https://jsbin.com/jegati',
        icon: 'launch',
      },
    ],
  },
  {
    title: 'Prototyping w/ CodeSandBox',
    items: [
      {
        title: 'Vuetify quick prototypes',
        href: 'https://codesandbox.io/s/r4no57177n',
        icon: 'open_with',
      },
      {
        title: 'How Vue slots works',
        href: 'https://codesandbox.io/s/qxnxx7p949',
        icon: 'open_with',
      },
    ],
  },
  {
    title: 'Standalone UI library',
    items: [
      {
        title: 'Code',
        href: 'https://github.com/renoirb/experiments-vue-components-201803',
        icon: 'code',
      },
      {
        title: 'Explanation',
        href: 'https://github.com/renoirb/experiments-vue-components-201803/tree/master/examples/alpha',
        icon: 'book',
      },
      {
        title: 'Testing',
        href: 'https://github.com/renoirb/experiments-vue-components-201803/blob/master/tests/unit/UCopyrightLinks.spec.js',
        icon: 'equalizer',
      },
      {
        title: 'Demo',
        href: 'http://renoirb.com/article-support/2018-experiments-vue-components/',
        icon: 'launch',
      },
    ],
  },
  {
    title: 'Recursivity and Dynamic Components',
    items: [
      {
        title: 'Initial UTableRowsIterator component',
        href: 'https://codesandbox.io/s/yvkmy1462x',
        icon: 'open_with',
      },
      {
        title: 'component and v-bind',
        href: 'https://codepen.io/renoirb/pen/qomjoV',
        icon: 'open_with',
      },
    ],
  },
]

const head = {
  title: 'Experiments',
}

// @vue/component
export default {
  layout: 'default',
  data: () => ({
    experiments,
    title: head.title,
  }),
  head,
}
</script>
