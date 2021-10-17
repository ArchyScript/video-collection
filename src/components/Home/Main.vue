<template>
    <div>
        <!-- Header Bar -->
        <Header/>

        <template>
            <v-carousel 
                cycle
                height="100%"
                hide-delimiter-background
                show-arrows-on-hover
                style="height:100%;"
            >
                <v-carousel-item
                    v-for="(eachAvailableImage, index) in availableImages"
                    :key="index"
                    :src="eachAvailableImage.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
        </template>
    </div>
</template>

<script>
import Header from '../Header/Main.vue'

export default {
  data: () => ({
    availableImages: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
  }),
  
  components: {
    Header,
  },

  methods: {

  }
}
</script>

<style scoped>

</style>