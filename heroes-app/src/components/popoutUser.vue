<template>
  <v-container>
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex grow pa-1>
            <v-text-field
              single-line
              floating
              label="Search a hero"
              outline
              prepend-icon="search"
              name="searchHeroes"
              type="text"
              v-model= 'searchHero'
            >
          </v-text-field>
        </v-flex>
        <v-flex shrink pa-1>
            <v-btn @click="searchHeroes()" color= 'blue lighten-2'>Find</v-btn>
        </v-flex>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      </v-layout>
    </v-container>
    
    <v-layout row wrap v-if="this.heroFind === null">
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in sendMarvel.length"
            :key="i"
          >
            <template v-slot:header>
              <div>{{sendMarvel[i].name}} <v-img :src="require('../assets/marvel-logo.png')" width="20" heigth="30"></v-img> </div>
            </template>
            <v-card>
              <v-img :src="require('../../public/img/' + sendMarvel[i].avatar)"></v-img>
              <v-card-text>{{sendMarvel[i].biography}} </v-card-text>
              <v-card-text><div style="color: red" >Primera aparicion en los cómics:</div> {{sendMarvel[i].birth}} </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

      <v-flex xs12 lg5 offset-lg2>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in sendDC.length"
            :key="i"
          >
            <template v-slot:header>
              <div>{{sendDC[i].name}} <v-img :src="require('../assets/dc-logo.jpg')" width="20" heigth="30"></v-img></div>
            </template>
            <v-card>
              <v-img :src="require('../../public/img/' + sendDC[i].avatar)"></v-img>
              <v-card-text>{{sendDC[i].biography}} </v-card-text>
              <v-card-text><div style="color: red" >Primera aparicion en los cómics:</div> {{sendDC[i].birth}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    
      <v-layout row wrap v-else>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>{{heroFind.name}} 
                <div v-if="heroFind.creator == 'Marvel'">
                  <v-img :src="require('../assets/marvel-logo.png')" width="20" heigth="30"></v-img> 
                </div>
                <div v-else>
                  <v-img :src="require('../assets/dc-logo.jpg')" width="20" heigth="30"></v-img> 
                </div>  
              </div>
            </template>
            <v-card>
              <v-img :src="require('../../public/img/' + heroFind.avatar)"></v-img>
              <v-card-text>{{heroFind.biography}} </v-card-text>
              <v-card-text><div style="color: red" >Primera aparicion en los cómics:</div> {{heroFind.birth}} </v-card-text>

            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    <navDrawer :drawerBoton = 'drawer'/>
  </v-container>
</template>

<script>

import navDrawer from '@/components/navDrawer'

  export default {
    data () {
      return {
        heroes: null,
        numeroHeroes: null,
        descripcionHeroes: null,
        searchHero: null,
        heroFind: null,
        drawer: false
      }
    },
    props: ['sendDC','sendMarvel','drawerBoton', 'sendHeroes'],
    components:{
      navDrawer
    },

    mounted:{

    },
      
    methods: {
      imprimir: function(){
        alert(this.searchHero);
      },
      searchHeroes: function(){
        if(this.searchHero === '' || this.searchHero ===null){
            this.heroFind = null
        }else{
          this.heroFind=this.sendHeroes.find((hero)=>{
            return hero.name === this.searchHero;
            });        
        }
      }
    }
  }
</script>