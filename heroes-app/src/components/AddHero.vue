<template>
<v-app id="inspire">
    <v-content> 
      <div class="content">
        <div class="title m-b-md">
            CREATE YOUR OWN HERO
        </div>
        <p>How is your perfect hero? create it</p>
      </div>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue">
                  <v-toolbar-title>Describe your perfect Hero:</v-toolbar-title>
              </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field  prepend-icon="person" name="name" label="Name" type="text" v-model= 'name'></v-text-field>
                    <v-text-field  prepend-icon="import_contacts" name="biography" label="Biography" type="text" v-model= 'biography'></v-text-field>
                    <v-text-field  prepend-icon="portrait" name="avatar" label="Avatar" type="" v-model= 'avatar'></v-text-field>
                    <v-text-field  prepend-icon="calendar_today" name="birth" label="Birth" type="date" v-model= 'birth'></v-text-field>
                    <v-select
                      prepend-icon="thumbs_up_down" name="category" label="Hero or Villain" type="text" v-model= 'category'
                      :items="itemsCat"
                    ></v-select> 
                    <v-select
                      prepend-icon="bookmarks" name="creator" label="Creator" type="text" v-model= 'creator'
                      :items="itemsCreator"

                    ></v-select>
                  </v-form>

                  <v-btn 
                    dark
                    @click="sendData" 
                    color="blue">Create!
                  </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-dialog
            v-model="show"
            persistent
            width="300">
            <v-card>
              <v-card-text>
                {{message}}
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import axios from 'axios'

  export default {
    data: () => ({
      name: '',
      biography: '',
      avatar: '',
      birth: '',
      category:'',
      creator: '',
      //Dialog Data
      url: null,
      message: '',
      show: false,
      loading: false,
      itemsCat: ['Hero', 'Villain'],
      itemsCreator: ['Marvel', 'DC']


    }),
    methods: {
        sendData: function(){
        const hero = {
          name:this.name,
          biography: this.biography,
          avatar : this.avatar,
          birth: this.birth,
          category : this.category,
          creator : this.creator
        };
      

      axios
      .post('http://localhost:3000/perfectHero', hero)
      .then(() => {
        this.$router.push('/user')
      })
      .catch(function (error) {
        alert(error);
      });
      
    }

    }
  }
</script>