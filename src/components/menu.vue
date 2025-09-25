<script setup>
const menu ={
    
    
    0:{
        name: 'crispy chiken',
        image:"/images/menu/alaundra-alford-BmRbJBoudDw-unsplash.jpg",
        price: 700 ,
        description: 'crispychiken',
        category: 'food'

    },

    1:{
        name: 'sushi',
        image:"/images/menu/andraz-lazic-iy_MT2ifklc-unsplash.jpg",
        price: 1500 ,
        description: 'sushi',
        category: 'food'

    },

    2:{
        name: 'pasta',
        image:"/images/menu/ayesha-firdaus-c3esWyvW3E4-unsplash.jpg",
        price: 500,
        description: 'pasta',
        category: 'food'

    },

    3:{
        name: 'lobster-gourmet',
        image:"/images/menu/delicious-lobster-gourmet-seafood.jpg",
        price: 5000 ,
        description: 'lobster-gourmet',
        category: 'food'

    },

    4:{
        name: 'grild chiken',
        image:"/images/menu/barun-ghosh-7xOUEcYHMoY-unsplash.jpg",
        price: 2000,
        description: 'grild chiken',
        category: 'food'

    },

    5:{
        name: 'salmon with salad',
        image:"/images/menu/caroline-attwood-bpPTlXWTOvg-unsplash.jpg",
        price: 1500,
        description: 'salmon with salad',
        longDescription: "",
        category: 'food'

    },

    6:{
        name: 'tuna with vege',
        image:"/images/menu/casey-lee-awj7sRviVXo-unsplash.jpg",
        price: 3000,
        description: 'tuna with vege',
        category: 'food'

    },

    7:{
        name: 'gilled meat',
        image:"/images/menu/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg",
        price: 4500 ,
        description: 'grilled meat',
        category: 'food'

    },

    8:{
        name: 'sweet chiken',
        image:"/images/menu/george-zheng-0Kbjfwunink-unsplash.jpg",
        price: 3000,
        description: 'sweet chiken',
        category: 'food'

    },

    9:{
        name: 'bagas',
        image:"/images/menu/junior-reis-48YwNFr2UmE-unsplash.jpg",
        price: 1500,
        description: 'bagas',
        category: 'snack'

    },

    10:{
        name: 'chiken with fries',
        image:"/images/menu/lilas-yohane-14jmOnCcZkU-unsplash.jpg",
        price: 2000,
        description: 'chiken with fries',
        category: 'food'

    },



11:{
        name: 'salad',
        image:"/images/menu/luisa-brimble-2RrBE90w0T8-unsplash.jpg",
        price: 500 ,
        description: 'salad',
        category: 'food'

    },

12:{
        name: 'smoothe',
        image:"/images/menu/alex-lvrs-HDjExSGuWUw-unsplash.jpg",
        price: 600 ,
        description: 'smoothe',
        category: 'drink'

    },

    13:{
        name: 'beer',
        image:"/images/menu/mae-mu-kbch-i63YTg-unsplash.jpg",
        price: 700,
        description: 'beer',
        category: 'drink'

    },


14:{
        name: 'piza',
        image:"/images/menu/thomas-tucker-MNtag_eXMKw-unsplash.jpg",
        price: 1000,
        description: 'piza',
        category: 'snack'

    },

  


}


</script>

<template>
    <hi>Menu</hi>
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
                    <v-card-actions>
                        <v-card-titel>{{ item.price }}</v-card-titel>
                        <v-btn>order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </V-row>
    </v-container>
</template>