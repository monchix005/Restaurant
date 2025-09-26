<script setup>


import { useMenuStore }from '../stores/menu'
import {useRouter} from "vue-router";

const router= useRouter();
const menustore=useMenuStore()
const menu=menustore.menu

function view(menu){
    menustore.updateSelectedMenuItem(menu)//keep track of
    router.push('/menuitem')
}

</script>

<template>
    <h1>Menu</h1>
    <v-container>
        <V-row>
            <v-col md="3" v-for="item in menu ":key= "item">
                <v-card color="purple-lighten-1">
                    <v-img :src="item.image" height="200" cover></v-img>
                    <v-row>
                        <v-col md="6">
                            <v-card-title>{{ item.name }}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip>{{item.category }}</v-chip>
                        </v-col>

                    </v-row>
                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                    <v-card-title>{{ item.price }}</v-card-title>
                        <v-card-actions>

                        <v-btn @click="view(item)">view</v-btn>
                        <v-btn>order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </V-row>
    </v-container>
</template>