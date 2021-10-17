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
              :src="$auth.isAuthenticated ? $auth.user.picture : require('./assets/login_icon.png')"
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
                    <!-- <span :v-text="$auth.isAuthenticated ? $auth.user.nickname  : 'User Account'"> {{ $auth.user.nickname }} </span> -->

                    <span v-if="$auth.isAuthenticated"> {{ $auth.user.nickname  }} </span>
                    <span v-if="!$auth.isAuthenticated"> Manage Account </span>

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
                      :src="$auth.isAuthenticated ? $auth.user.picture : require('./assets/login_icon.png')"
                    />

                      <v-list-item-title  v-if="$auth.isAuthenticated" @click="goToProfile"> Profile </v-list-item-title>
                      <v-list-item-title  v-if="!$auth.isAuthenticated" @click="login"> Login </v-list-item-title>
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

                  <v-list-item v-if="$auth.isAuthenticated">
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
      console.log("Login attempt")
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      console.log("Logout attempt")

      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    uploadPicture() {
      
    },
    goToProfile() {
      this.$router.push(`/profile`)
    },
    settings() {

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
