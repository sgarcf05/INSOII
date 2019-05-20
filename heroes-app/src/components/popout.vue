<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(item,i) in sendMarvel.length"
            :key="i"
          >
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text>{{sendMarvel}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

      <v-flex xs12 lg5 offset-lg2>
        <v-expansion-panel inset>
          <v-expansion-panel-content
            v-for="(item,i) in sendDC.length"
            :key="i"
          >
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text>{{sendDC}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>

  export default {
    data () {
      return {
        heroes: null,
        numeroHeroes: null,
        descripcionHeroes: null,
      }
    },
    props: ['sendDC','sendMarvel'],

    mounted:{

    },
      
    methods: {
      imprimir: function(){
        alert();
      }
    }
  }
</script>