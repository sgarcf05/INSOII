<template >
  <div id="app">
    <div id="nav">
      <v-toolbar fixed app>
        <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">HEROES</router-link> -
        <span class="font-weight-light">app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/heroes">HERO'S LIST</router-link>
      <v-spacer></v-spacer>
      <div v-if="id==null"> 
      <router-link to="/login" :idPassed = 'id'>Login</router-link> |
      <router-link to="/register">Register</router-link>
      </div>
      <router-link :to="{name: 'user', params: {id:this.id}}" v-else>Hi {{id}} </router-link>

      </v-toolbar>
    </div> 
    <router-view @logOut='userLogOut' @sendUser= 'saveUser'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      id:null
    }
  }, 
  methods:{
      saveUser: function(id){
        this.id = id
      },
      userLogOut: function(logger){
        this.id = logger
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
