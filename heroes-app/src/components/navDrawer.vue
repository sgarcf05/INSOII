<template>
    <v-layout wrap style="height: 200px;">

        <v-container>

        </v-container>
        <v-navigation-drawer fixed v-model="drawerBoton" right app>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <button @click="addHero">
                            <v-icon>add</v-icon>
                        </button>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-text-field
                        label="Add a hero"
                        type="text"
                        v-model= 'addHeroTF'
                        >
                        </v-text-field> 
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-action>
                        <button @click="deleteHero">
                            <v-icon>delete</v-icon>
                        </button>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-text-field
                        label="Delete a hero"
                        type="text"
                        v-model= 'deleteHeroTF'
                        >
                        </v-text-field>  
                    </v-list-tile-content>
                </v-list-tile>
                
                <v-list-tile>
                    <v-list-tile-action>
                        <button @click="searchHeroToUpdate">
                            <v-icon>edit</v-icon>
                        </button>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-text-field
                        label="Edit a hero"
                        type="text"
                        v-model= 'editHeroTF'
                        >
                        </v-text-field> 
                        </v-list-tile-content>
                </v-list-tile>

            </v-list>


            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>group_add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <router-link to='/addhero'>
                            <v-list-tile-title>Create your own Hero</v-list-tile-title>
                        </router-link>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list>
                <v-list-tile @click='logOut'>
                    <v-list-tile-action>
                        <v-icon>trending_flat</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Log out</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>




                <v-list-tile @click="helpData = true">
                    <v-list-tile-action>
                        <v-icon>help</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Help</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    <div v-if="helpData === true">
       <v-layout row justify-center>
        <v-dialog
        v-model="helpData"
        max-width="290"
        >
        <v-card>
            <v-card-title class="headline">User services?</v-card-title>

            <v-card-text>
                Enter the name of the hero you want to add, delete or edit.
                Once added, press the icon itself to make its function.
                Try to put correctly the name of the hero.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                flat="flat"
                @click="helpData = false"
            >
                Agree
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-layout>
    </div>

    <div v-if="editClicked === true">
          <v-layout row justify-center>
            <v-dialog v-model="editClicked" persistent max-width="600px">
            <v-card>
                <v-card-title>
                <span class="headline">Edit {{this.editHeroTF}}</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                     <v-select
                            prepend-icon="bookmarks" name="creator" label="Creator" type="text" v-model= 'comicfavorito'
                            :items="itemsCreator"
                        ></v-select>                    </v-flex>                    
                    </v-layout>
                </v-container>
                <small>Change the creator of the hero: {{this.editHeroTF}}</small>                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="editClicked = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="updateHero">Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>
    </div>

    </v-layout>

</template>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                heroFound: null,
                addHeroTF: null,
                deleteHeroTF: null,
                editHeroTF: null,
                editClicked: false,
                helpData: false,
                loginOut: null,
                comicfavorito: 'Change creator',
                heroReceived: null,
                itemsCreator: ['Marvel', 'DC']
            }
            
        },

        props: ['drawerBoton'],
        
        methods: {
            addHero: function(){
                
                let url= 'http://localhost:3000/heroe/';
                let heroToPass= this.addHeroTF;
                let urlHero = url + heroToPass;

                const id=this.getUrl();

                axios
                .post(urlHero , {
                    params:{
                        ID: id,
                        hero: heroToPass
                    }
                } 
                )
                .then(response => {
                    this.heroFound = response;
                    alert('Hero registered correctly! \n refresh the page please')
                })
                .catch(err => {
                    this.info='no te cojo nada';
                    alert(err);
                });          
            },


            deleteHero: function(){

                let url= 'http://localhost:3000/heroe/';
                let heroToPass= this.deleteHeroTF;
                let urlHero = url + heroToPass;

                const id=this.getUrl();

                axios
                .delete(urlHero, {
                    params:{
                        user: id,
                    }
                }).then (() =>{
                    this.$router.push('/user/'+id)
                }).catch(err => {
                    alert('Ha habido un error' +err)
                });
            },

            searchHeroToUpdate: function() {
                this.editClicked = true;

                let url= 'http://localhost:3000/heroe/' + this.editHeroTF;

                axios
                .get(url)
                .then(res =>{
                    this.heroReceived = res
                }).catch(err =>{
                    err = "The hero who search isn't in your DB"
                    alert(err);

                })

                return this.heroReceived;
            },

            updateHero:function(){
                
                const id=this.getUrl();

                let url= 'http://localhost:3000/heroe/' + this.searchHeroToUpdate().data.name;


                axios
                .put(url ,{
                    params:{
                        user: id,
                        edit: this.comicfavorito,
                        name: this.searchHeroToUpdate().data.name
                    }
                })
                this.$router.push('/heroes');

            },
            logOut: function(){
                alert('Cerrando sesión')
                this.heroFound= null,
                this.addHeroTF= null,
                this.deleteHeroTF= null,
                this.editClicked= false,
                this.helpData= false,
                this.heroName = null,
                this.addedAt= null,
                this.$emit('logOut', this.loginOut)
                this.$router.push('/');
            },
            getUrl: function(){
                //Se obtiene el valor de la URL desde el navegador
                var actual = window.location+'';
                //Se realiza la división de la URL
                var split = actual.split("/");
                //Se obtiene el ultimo valor de la URL
                var id = split[split.length-1];
                return id;
             }
        }
    }
</script>