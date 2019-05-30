<template>
    <v-content>
        <popoutUser @logOut='logOut' :sendDC = 'dc' :sendMarvel = 'marvel' :sendHeroes = 'heroesUser'/>
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

      let id= this.getUrl();
      
      axios
        .get('http://localhost:3000/heroesUser', {
          params:{
            user: id,
           }
          } 
          ).then(response => {
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
      alert(this.dc);
    },
    getUrl: function(){
      //Se obtiene el valor de la URL desde el navegador
      var actual = window.location+'';
      //Se realiza la división de la URL
      var split = actual.split("/");
      //Se obtiene el ultimo valor de la URL
      var id = split[split.length-1];
      return id;
    },
    logOut: function(logger){
      this.$emit('logOut', logger)
    }
  }
  

}
</script>
