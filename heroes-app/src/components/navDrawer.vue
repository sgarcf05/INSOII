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
                        <button @click="imprimir">
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
                        <button @click="editClicked=true">
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
                <v-list-tile @click="imprimir">
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
                <span class="headline">Edit Hero</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                        <v-text-field label="Date*" type='date' required></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field label="Biography" tyoe ='text' required></v-text-field>
                    </v-flex>                    
                    </v-layout>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="editClicked = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="editClicked = false">Save</v-btn>
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
                helpData: false  
            }
        },

        props: ['drawerBoton'],
        
        methods: {
            imprimir: function () {
                alert(this.heroFound);
            },
            addHero: function(){
                

                let url= 'http://localhost:3000/heroes/';
                let heroToPass= this.addHeroTF;
                let urlHero = url + heroToPass;
                axios
                .get(urlHero , {
                    params:{
                        ID: this.id,
                    }
                } 
                )
                .then(response => {
                    this.heroFound = response;
                    alert(response)
                })
                .catch(err => {
                    this.info='no te cojo nada';
                    alert(err);
                });          
            },


            deleteHero: function(){

                let url= 'http://localhost:3000/heroes/';
                let heroToPass= this.deleteHeroTF;
                let urlHero = url + heroToPass;

                axios
                .delete(urlHero , {
                    params:{
                        ID: this.id,
                    }
                } 
                ).then(response=> {
                    alert('Borrando el heroe' + name);
                })
            }
        }
    }
</script>