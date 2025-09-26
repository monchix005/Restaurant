
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
const menu ={
    
    
    0:{
        name: 'crispy chiken',
        image:"/images/menu/alaundra-alford-BmRbJBoudDw-unsplash.jpg",
        price: 700 ,
        description: 'crispychiken',
        longDescription:"Juicy chicken coated in a perfectly seasoned, golden-brown crust that delivers a satisfying crunch with every bite. Fried to perfection, the inside stays tender and flavorful while the outside is irresistibly crispy. A comfort food favorite that’s great on its own or paired with fries, slaw, or a dipping sauce.",
        category: 'food'

    },

    1:{
        name: 'sushi',
        image:"/images/menu/andraz-lazic-iy_MT2ifklc-unsplash.jpg",
        price: 1500 ,
        description: 'sushi',
        longDescription:"Sushi is a traditional Japanese dish that artfully combines vinegared rice (known as shari) with a variety of ingredients (neta), such as raw or cooked seafood, vegetables, and occasionally tropical fruits. It's celebrated not just for its flavor, but for its visual elegance and balance of texture.",
        category: 'food'

    },

    2:{
        name: 'pasta',
        image:"/images/menu/ayesha-firdaus-c3esWyvW3E4-unsplash.jpg",
        price: 500,
        description: 'pasta',
        longDescription:"is a traditional Italian food made from an unleavened dough of wheat flour mixed with water or eggs, and then shaped into various forms. It is typically cooked by boiling or baking. Pasta comes in hundreds of shapes and sizes, such as spaghetti (long and thin), penne (short tubes), farfalle (bowtie-shaped), and lasagna (flat sheets).",
        category: 'food'

    },

    3:{
        name: 'lobster-gourmet',
        image:"/images/menu/delicious-lobster-gourmet-seafood.jpg",
        price: 5000 ,
        description: 'lobster-gourmet',
        longDescription:"Succulent, sweet, and exquisitely tender, lobster is the epitome of gourmet seafood. Prized for its delicate flavor and luxurious texture, lobster is often the star of fine dining menus, where its naturally rich taste is elevated by expert preparation and refined accompaniments.",
        category: 'food'

    },

    4:{
        name: 'grild chiken',
        image:"/images/menu/barun-ghosh-7xOUEcYHMoY-unsplash.jpg",
        price: 2000,
        description: 'grild chiken',
        longDescription:"Juicy, tender, and kissed by flame, grilled chicken is a timeless classic that balances simplicity with bold, smoky flavor. Marinated in a blend of herbs, citrus, or spices, the chicken is seared over an open flame or hot grill, locking in its natural juices while developing a beautifully charred exterior. ",
        category: 'food'

    },

    5:{
        name: 'salmon with salad',
        image:"/images/menu/caroline-attwood-bpPTlXWTOvg-unsplash.jpg",
        price: 1500,
        description: 'salmon with salad',
        longDescription: "A perfectly grilled fillet of salmon, seasoned with herbs and a touch of lemon, served atop or alongside a vibrant garden salad. The salad features crisp lettuce, cherry tomatoes, cucumber slices, red onion, and a light vinaigrette or creamy dressing. The rich, tender salmon pairs beautifully with the fresh crunch of the vegetables, offering a healthy, balanced, and flavorful meal.",
        category: 'food'

    },

    6:{
        name: 'tuna with vege',
        image:"/images/menu/casey-lee-awj7sRviVXo-unsplash.jpg",
        price: 3000,
        description: 'tuna with vege',
        longDescription:"Succulent, seared tuna steak—lightly seasoned and cooked to a tender, medium-rare—served with a colorful medley of sautéed vegetables such as bell peppers, zucchini, carrots, and broccoli. The dish combines the rich, meaty flavor of tuna with the natural sweetness and crunch of fresh vegetables, making for a nutritious and satisfying meal.",
        category: 'food'

    },

    7:{
        name: 'gilled meat',
        image:"/images/menu/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg",
        price: 4500 ,
        description: 'grilled meat',
        longDescription:"Juicy, tender cuts of meat grilled to perfection over an open flame, seasoned with aromatic herbs and spices. Each bite delivers a smoky, charred flavor on the outside with succulent, flavorful meat inside. Served hot and fresh, it’s a hearty and satisfying dish perfect for meat lovers.",
        category: 'food'

    },

    8:{
        name: 'sweet  glazed chiken',
        image:"/images/menu/george-zheng-0Kbjfwunink-unsplash.jpg",
        price: 3000,
        description: 'sweet chiken',
        longDescription:"Tender pieces of chicken coated in a rich, sticky-sweet glaze made from honey, brown sugar, or sweet soy sauce. Lightly caramelized on the outside and juicy on the inside, this dish strikes a perfect balance between savory and sweet. Often paired with rice or vegetables, it’s a comforting and flavorful favorite.",
        category: 'food'

    },

    9:{
        name: ' classic beef burger',
        image:"/images/menu/junior-reis-48YwNFr2UmE-unsplash.jpg",
        price: 1500,
        description: 'bagas',
        longDescription:"A juicy, grilled beef patty served on a toasted bun with crisp lettuce, fresh tomato, sliced onions, pickles, and melted cheese. Finished with a tangy burger sauce or your choice of condiments, this hearty burger delivers bold flavor in every bite. Served with a side of fries or your favorite toppings.",
        category: 'snack'

    },

    10:{
        name: 'chiken with fries',
        image:"/images/menu/lilas-yohane-14jmOnCcZkU-unsplash.jpg",
        price: 2000,
        description: 'chiken with fries',
        longDescription:"Golden, crispy fried or grilled chicken—tender on the inside, perfectly seasoned on the outside—served with a generous side of hot, crunchy fries. A classic comfort food combo that's satisfying, flavorful, and perfect for any time of day.",
        category: 'food'

    },



11:{
        name: 'salad',
        image:"/images/menu/luisa-brimble-2RrBE90w0T8-unsplash.jpg",
        price: 500 ,
        description: 'salad',
        longDescription:"A vibrant mix of crisp lettuce, juicy cherry tomatoes, cucumber slices, shredded carrots, and red onions, tossed in your choice of dressing. Light, refreshing, and packed with flavor—perfect as a starter, side, or a healthy main dish.",
        category: 'food'

    },

12:{
        name: 'smoothie',
        image:"/images/menu/alex-lvrs-HDjExSGuWUw-unsplash.jpg",
        price: 600 ,
        description: 'smoothie',
        longDescription:"A cool and creamy blend of ripe fruits—like banana, berries, and mango—mixed with yogurt or juice for a naturally sweet, refreshing drink. Packed with vitamins and perfect for a quick breakfast, post-workout boost, or a healthy snack on the go.",
        category: 'drink'

    },

    13:{
        name: 'beer',
        image:"/images/menu/mae-mu-kbch-i63YTg-unsplash.jpg",
        price: 700,
        description: 'beer',
        longDescription:"is one of the world’s oldest and most beloved beverages, crafted through the fermentation of malted grains, hops, water, and yeast. With a rich heritage that spans continents and centuries, beer is both a cultural staple and a canvas for endless creativity.",
         category: 'drink'

    },


14:{
        name: 'pizza',
        image:"/images/menu/thomas-tucker-MNtag_eXMKw-unsplash.jpg",
        price: 1000,
        description: 'pizza',
        longDescription:"is a globally beloved dish that originated in Italy, celebrated for its perfect harmony of textures and flavors. At its core, pizza features a hand-stretched dough base—crisp on the outside, airy and tender within—topped with a vibrant tomato sauce, creamy mozzarella, and an array of fresh, flavorful ingredients.",
        category: 'snack'

    },

        }


        
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem(menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})