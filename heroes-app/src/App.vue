<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>HEROES</span>
        <span class="font-weight-light">app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <popout/>
    </v-content>
  </v-app>
</template>

<script>
import popout from './components/popout'

export default {
  name: 'App',
  components: {
    popout
  },
  data () {
    return {
      //
    }
  }
}
</script>
