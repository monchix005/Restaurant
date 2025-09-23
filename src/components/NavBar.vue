<script setup>

const isLoggedIn = true

</script>

<template>
    
    
    <v-app-bar color= "purple-lighten-1">
        <v-app-bar-title>jikoni foods</v-app-bar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/menu">Menu</v-btn>
        <v-btn to="/orders" v-if="isLoggedIn">Orders</v-btn>
        <v-btn to="/contactus">Contact Us</v-btn>
        <v-btn to="/resavation">Resavation</v-btn>

        <v-avatar to="/userprofil" v-if="isLoggedIn">
        <span class="text-h5 text-white">A</span>
    </v-avatar>

        <v-btn to="/loggin" v-else>Login</v-btn>
    </v-app-bar>
</template>