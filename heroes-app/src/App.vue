<template>
  <v-app>
    <v-toolbar fixed app>
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
        <span class="mr-2">Enseña JSON</span>
      </v-btn>
      <v-toolbar-side-icon @click="drawerBoton = !drawerBoton"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <login/>
      <popout :sendDC = 'dc' :sendMarvel = 'marvel'/>
      <navDrawer :drawer = 'drawerBoton'/>
    </v-content>
  </v-app>
</template>

<script>
import login from './components/login'
import popout from './components/popout'
import navDrawer from './components/navDrawer'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    login,
    popout, 
    navDrawer
  },
  data () {
    return {
      info: null,
      dc: null,
      marvel: null,
      drawerBoton: false
    }
  },
  
  mounted () {
    axios
        .get('http://localhost:3000/heroes')
        .then(response => {
          //this.info = JSON.stringify(response.data)
          this.info = response.data;


          this.dc = this.info.filter((hero) =>{
            return hero.creator === 'DC';
          });
          this.marvel = this.info.filter((hero) =>{
            return hero.creator === 'Marvel';
          });


          
          })
        .catch(err => {
          this.info='no te cojo nada';
        // eslint-disable-next-line
          console.log(err)
        });
    },
  methods: {
    imprimir: function(){
      alert(JSON.stringify(this.marvel));
    }
  }


}
</script>
