<template>
  <div>
    <Header/>

    <v-card
      class="mx-auto"
      max-width="80%"
    >
      <v-img
        :src="require('../../assets/my_logo.jpeg')"
        :aspect-ratio="16/9"
      >
      </v-img>
      <v-card-title>
        <div class="text-h3 mb-2">
          Welcome 
          {{ $auth.user.nickname  }} 
        </div> 
      </v-card-title>
      
      <v-list-item color="rgba(0, 0, 0, .4)">
        <v-list-item-content>
          <v-list-item-title class="title">
          Picture: 
            <v-img 
              class="mx-2 rounded-circle"
              contain
              transition="scale-transition"
              width="80"
              outlined
              :src="$auth.user.picture"
            ></v-img>  
          </v-list-item-title>

          <v-list-item-title class="title my-2"> Full Name: {{$auth.user.name}} </v-list-item-title>
          <v-list-item-title class="title my-2"> Email: {{$auth.user.email}} </v-list-item-title>
          <v-list-item-title class="title my-2"> Nickname: {{$auth.user.nickname}} </v-list-item-title>
          <v-list-item-title class="title my-2"> Account Verification: {{$auth.user.email_verified}} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import Header from '../Header/Main.vue'

export default {
  data: () => ({
    
  }),
  
  components: {
    Header,
  },
  methods: {
    
  },
}
</script>

<style scoped>

</style>