<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple accent-4"
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title> Video Collection </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <!-- Profile Links -->
      <!-- <template>
        <div class="d-flex">
          <div class="d-flex justify-center align-center mr-2">
            <v-img
              alt="Profile Picture"
              class="mx-2 rounded-circle"
              contain
              transition="scale-transition"
              width="30"
              outlined
              :src="require('./assets/logo.svg')"
            />

            <span class="mx-3 align-center"> 
              Dasaolu Daniel
            </span>
          </div>
        </div>
      </template> -->

      <!-- Profile Links -->
      <template>
          <div class="d-flex justify-center align-center mr-2" style="user-select: none; ">
            <v-img
              alt="Profile Picture"
              class="mx-2 rounded-circle"
              contain
              transition="scale-transition"
              width="30"
              outlined
              :src="require('./assets/login_icon.png')"
            />

            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    style="user-select: none; "
                  >

                    <span> Manage Account </span>

                    <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
                  </span>
                </template>

                <v-list>
                  <v-list-item>
                    <v-img
                      alt="Profile.nickname"
                      class="mx-2 rounded-circle"
                      contain
                      transition="scale-transition"
                      width="20"
                      outlined
                      :src="require('./assets/login_icon.png')"
                    />

                      <v-list-item-title  @click="goToProfile"> Profile </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-img
                      class="mx-2 rounded-circle"
                      contain
                      transition="scale-transition"
                      width="20"
                      outlined
                      :src="require('./assets/upload_icon.png')"
                    />

                    <v-list-item-title @click="uploadPicture"> Upload </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-img
                      class="mx-2 rounded-circle"
                      contain
                      transition="scale-transition"
                      width="20"
                      outlined
                      :src="require('./assets/settings_icon.png')"
                    />

                    <v-list-item-title @click="settings"> Settings </v-list-item-title>
                  </v-list-item>

                  <v-list-item>
                    <v-img
                      class="mx-2 rounded-circle"
                      contain
                      transition="scale-transition"
                      width="20"
                      outlined
                      :src="require('./assets/logout_icon.png')"
                    />

                    <v-list-item-title @click="logout"> Logout </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
      </template>
    </v-app-bar>

    <!-- <Header/> -->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import { Header } from "./components/Header/Main.vue";

export default {
  name: 'App',

  data: () => ({
    items: [
      { iconName: "mdi-checkbox-marked-circle", title: 'Profile' },
      { iconName: "mdi-checkbox-marked-circle", title: "Login" }
    ],
  }),

  components: {
    // Header,
  },

  methods: {
    // Log the user in
    login() {
      this.$router.push(`/`)
    },
    // Log the user out
    logout() {
      this.$router.push(`/`)
    },
    uploadPicture() {
      this.$router.push(`/`)
    },
    goToProfile() {
      this.$router.push(`/`)
    },
    settings() {
      this.$router.push(`/`)
    }
  }

};
</script>

<style scoped>
  v-list-item {
    user-select: none;
    cursor: pointer;
  }
</style>
