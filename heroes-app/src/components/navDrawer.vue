<template>
    <v-layout wrap style="height: 200px;">

        <v-container>

        </v-container>
        <v-navigation-drawer fixed v-model="drawer" right app>
            <v-list dense>
                <v-list-tile @click="imprimir">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Añadir Heroe</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="imprimir">
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Borrar Heroe</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="imprimir">
                    <v-list-tile-action>
                        <v-icon>present_to_all</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Editar Heroe</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>


                <v-list-tile @click="imprimir">
                    <v-list-tile-action>
                        <v-icon>cloud_queue</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>ULE Cloud</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>



            <v-list-tile @click="imprimir">
                <v-list-tile-action>
                    <v-icon>trending_flat</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Log out</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>


            <v-list-tile @click="imprimir">
                <v-list-tile-action>
                    <v-icon>help</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Help</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>


        </v-navigation-drawer>
    </v-layout>


</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: ['drawer'],
        
        methods: {
            imprimir: function () {
                alert('hola');
            }
        }
    }
</script>