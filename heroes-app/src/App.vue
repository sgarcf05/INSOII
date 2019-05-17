<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>HEROES</span>
        <span class="font-weight-light">app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-img
          :src="require('./assets/heroes.png')"
          class="my-3"
          contain
          height="65"
        ></v-img>
      <v-spacer></v-spacer>
      <v-btn v-on:click = 'imprimir'
        flat
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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    popout
  },
  data () {
    return {
      info: null
    }
  }, 
  mounted () {
    axios
        .get('http://localhost:3000/heroes')
        .then(response => (this.info = JSON.stringify(response.data)))
        .catch(err => {
          this.info='no te cojo nada';
        // eslint-disable-next-line
          console.log(err)
        });
    }, 
  methods: {
    imprimir: function(){
      alert(this.info);
    }
  }


}
</script>
