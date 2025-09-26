<script setup>

</script>

<template>
     <!-- carouusel; -->
     <v-container>
        <v-row>
         <v-carousel>
         <v-carousel-item src="/images/alan-hardman-SU1LFoeEUkk-unsplash.jpg"></v-carousel-item>
         <v-carousel-item src="/images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg"></v-carousel-item>
         <v-carousel-item src="/images/brina-blum-surQ2mkZNxw-unsplash.jpg"></v-carousel-item>
         <v-carousel-item src="/images/eaters-collective-12eHC6FxPyg-unsplash.jpg"></v-carousel-item>
            </v-carousel>
      </v-row>
     </v-container>
               <!-- about -->
                  <v-container>
                  <v-row>
                     <v-card align="center">
                        <P class="text-h4"><b>welcome to jikoni restaurant</b></P>
                        <p class="text-h6">Welcome to jikoni restaurant delicious universe. Everything from our Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals Right here at your fingertips.</p>
                        <p class="text-h6">Food Quality and Taste: Delicious and well-prepared food is a primary draw. 
            Service: Friendly, well-mannered, and attentive staff provide a positive guest experience. 
            Ambiance and Comfort: A restaurant's atmosphere, decor, sound level, and comfortable seating create the overall mood. 
            Speed of Service: Food should be delivered in a timely manner after ordering. </p>
                        <p class="text-h6">come one come all</p>

                     </v-card>
                        
                  </v-row>
               </v-container>
                              <!-- news -->
                              <v-container>
                                 <v-row>
                                    <v-col md="4">
                                       <v-card color="purple-lighten-1">
                                          <v-img
                                          src="/images/shawn-nmpW_WwwVSc-unsplash.jpg"
                                          class="align-end text-white"
                                          height="200"
                                          cover>
                                       </v-img>
                                          <v-card titel>Restaurant</v-card titel>
                                          <v-card-subtitle>another sample</v-card-subtitle>
                                          <v-card-actions>
                                             <v-btn>read more</v-btn>
                                          </v-card-actions>
                                       </v-card>
                                    </v-col><v-col md="4">

                                       <v-card color="purple-lighten-1">
                                          <v-img
                                          src="/images/q-u-i-n-g-u-y-e-n-Zrp9b3PMIy8-unsplash (1).jpg"
                                          class="align-end text-white"
                                          height="200"
                                          cover>
                                       </v-img>
                                          <v-card titel>Bar</v-card titel>
                                          <v-card-subtitle>another sample</v-card-subtitle>
                                          <v-card-actions>
                                             <v-btn>read more</v-btn>
                                          </v-card-actions>
                                       </v-card>
                                    </v-col>

                              <v-col md="4">

                                       <v-card color="purple-lighten-1">
                                          <v-img
                                          src="/images/jason-leung-poI7DelFiVA-unsplash.jpg"
                                          class="align-end text-white"
                                          height="200"
                                          cover>
                                       </v-img>
                                          <v-card titel>sample</v-card titel>
                                          <v-card-subtitle>another sample</v-card-subtitle>
                                          <v-card-actions>
                                             <v-btn>read more</v-btn>
                                          </v-card-actions>
                                       </v-card>
                                    </v-col>
                                                               
                                 </v-row>
                              </v-container>
                                 
                  <!-- footer -->
                     <v-container>
                     <v-row>
                        <v-footer class="text-center d-flex flex-column ga-2 py-4" color="purple-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="mdi-facebook" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-twitter" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-linkepurple-lighten-1din" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-instagram" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>
                

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>jikoni restaurant</strong>
                </div>
            </v-footer>

                           
                     </v-row>
                  </v-container>
</template>