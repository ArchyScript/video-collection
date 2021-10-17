<template>
<div>

    <Header/>

  <v-card>


    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>

  </div>
</template>

<script>
    // import axios from "axios"
    import Header from '../Header/Main.vue'

  export default {
    name: "home",
    data: () => ({
      displayUploadBtn: false,
      selectedFile: null,
    }),

    components: {
      Header
    },
    methods: {
      // onFileSelected(event) {
      //   this.selectedFile = event.target.files[0]
      //   this.displayUploadBtn = true
      // },

      // uploadFile() {

      //   let file = this.selectedFile
      //   let formData = new FormData()

      //   console.log(file);

      //   formData.append("file", file)
      //   formData.append("upload_preset", this.CLOUDINARY_PRESET)

      //   axios({
      //     url: this.CLOUDINARY_URL,
      //     method: "POST", 
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded"
      //     },
      //     data: formData
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      // }
        
    }
  };
</script>