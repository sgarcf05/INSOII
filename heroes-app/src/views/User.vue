<template>
    <v-content>
        <popoutUser :sendDC = 'dc' :sendMarvel = 'marvel' :sendHeroes = 'heroes'/>
    </v-content>
</template>

<script>

import axios from 'axios'

//components
import popoutUser from '@/components/popoutUser'

export default {
  name: 'App',
  components: {
    popoutUser, 
  },
  data () {
    return {
      heroes: null,
      heroesUser: null,
      dc: null,
      marvel: null,
    }
  },
  
  mounted () {
    axios
        .get('http://localhost:3000/heroes')
        .then(response => {
          //this.heroes = JSON.stringify(response.data)
          this.heroes = response.data;


          this.dc = this.heroes.filter((hero) =>{
            return hero.creator === 'DC';
          });
          this.marvel = this.heroes.filter((hero) =>{
            return hero.creator === 'Marvel';
          });
          })
        .catch(err => {
          this.heroes='no te cojo nada';
          alert(err);
        });
      axios
        .get('http://localhost:3000/heroes')
        .then(response => {
          //this.heroes = JSON.stringify(response.data)
          this.heroesUser = response.data;

          this.dc = this.heroesUser.filter((hero) =>{
            return hero.creator === 'DC';
          });
          this.marvel = this.heroesUser.filter((hero) =>{
            return hero.creator === 'Marvel';
          });
          })
        .catch(err => {
          this.heroesUser='no te cojo nada';
          alert(err);
        });
    },
  methods: {
    imprimir: function(){
      alert(this.sendID);
    }
  }

}
</script>
