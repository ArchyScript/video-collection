<template>
  <div  class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <h1>This is an about page</h1>


      <br>
      <br>
      <br>
      <br>
      <v-btn outlined v-if="!$auth.isAuthenticated" @click="login">Log in 4</v-btn>

      <br>
      <br>
      <br>
      <br>
      <v-btn outlined v-if="$auth.isAuthenticated" @click="logout">Log out fuy</v-btn>

      {{ $auth.loading }}

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <v-btn outlined v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
      <!-- show logout when authenticated -->
      <v-btn outlined v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>


      <br>
      <br>
      <br>
      <br>



      <!-- NEW - add a route to the profile page -->
      <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      // HelloWorld,
    },
  }
</script>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: "home",
    components: {
      HelloWorld
    },
    methods: {
      // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      }
    }
  };
</script>