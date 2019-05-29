<template>
<v-app id="inspire">
    <v-content> 
      <div class="content">
        <div class="title m-b-md">
            HEROES APP REGISTER
        </div>
        <p>Feel yourself a superhero</p>
      </div>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-20">
              <v-toolbar dark color="teal">
                  <v-toolbar-title>Register new User</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form aria-label="Register">
                    
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="person"
                        v-model="id"
                        data-vv-name="name"
                        label="Name"
                        name="id"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="mail"
                        data-vv-name="email"
                        label="Email"
                        name="email"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="lock"
                        v-model="password"
                        data-vv-name="password"
                        ref="password"
                        label="Password"
                        name="password"
                        type="password"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="lock"
                        data-vv-as="password"
                        label="Password Confirm"
                        name="password_confirmation"
                        type="password"></v-text-field>
                    </v-flex>
                  </v-layout>
                      
                  <v-btn 
                    @click="sendData()" 
                    dark
                    color="teal">Submit</v-btn>
                </v-form>
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
                <p>Click on the URL to be directed to the personalized app login page</p>
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
      id: '',
      email: '',
      password:'',
      passsword_confirmation: '',
      url: null,
      message: '',
      show: false,
      userRegister: false
    }),
    methods: {
      sendData(){
      
          const userRegister = {
            name : this.id,
            password : this.password
          };

      axios
      
      .post('http://localhost:3000/register', userRegister)
      .then(response =>{
        alert(JSON.stringify(response))
        alert((response.data))

      }) 
      .catch(error=> {
        alert(error);
      });
      
      },
      validateUser: function(){
      axios
      .get('http://localhost:3000/register')
      .then(response =>{
        if(response.name!='undefined'){
          userRegister = true
          alert('Usuario ya registrado, por favor inténtelo de nuevo')
        }else{
          alert('Usuario registrado correctamente')
        }

      }) 
      .catch(error=> {
        alert(error);
      });
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