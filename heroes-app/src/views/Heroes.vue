<template>
    <v-content>
      <popout :sendDC = 'dc' :sendMarvel = 'marvel' :sendHeroes = 'heroes'/>
    </v-content>
</template>

<script>

import axios from 'axios'

//components
import popout from '@/components/popout'

export default {
  name: 'App',
  components: {
    popout, 
  },
  data () {
    return {
      heroes: null,
      dc: [],
      marvel: [],
      searchHero : null,
    }
  },
  
  mounted () {
    axios
        .get('http://localhost:3000/heroes')
        .then(response => {
          //this.info = JSON.stringify(response.data)
          this.heroes = response.data;

          this.dc = this.heroes.filter((hero) =>{
            return hero.creator === 'DC';
          });
          this.marvel = this.heroes.filter((hero) =>{
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
      alert(this.searchHero);
    }
  }


}
</script>
