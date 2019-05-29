
<template>
  <v-app id="inspire">
    <v-content> 
      <div class="content">
        <div class="title m-b-md">
            HEROES APPLICATION
        </div>

        <p>The place where you can save all your heroes</p>
      </div>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login User!</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model= 'id'></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model= 'pass'></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <router-link to="/register">
                <v-btn @click="imprimir" color="primary">Register</v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <router-link to="/user">
                <v-btn @click='logUser()' color="primary">Login</v-btn>
                </router-link>
                <v-dialog
                  v-model="dialog"
                  hide-overlay
                  persistent
                  width="300"
                >
                  <v-card
                    color="indigo"
                    dark
                  >
                  <v-card-text>
                    Logging in
                    <v-progress-linear
                      indeterminate
                      color="white"
                      class="mb-0"
                    ></v-progress-linear>
                  </v-card-text>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      id: null,
      pass: null,
      dialog: false
    }),

    methods: {
      logUser: function(){
        //this.$emit("sendUSer", this.id);
    
        axios
        .get('http://localhost:3000/user', this.user)
        .catch(err => {
          alert('Ha habido un error' +err)
        });
      },
      imprimir: function(){
      }
    }
  }
</script>

<style scoped>
#welcome {
    color: #636b6f;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    height: 100vh;
    margin: 0;
}
.full-height {
    height: 100vh;
}
.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
}
.position-ref {
    position: relative;
}
.top-right {
    position: absolute;
    right: 10px;
    top: 18px;
}
.content {
    text-align: center;
}
.title {
    font-size: 84px;
}
.links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
}
.m-b-md {
    margin-bottom: 30px;
}
</style>

















