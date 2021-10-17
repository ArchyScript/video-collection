<template>
  <div  class="about">
    <Header/>
    
    <h1 class="text-center"> About page </h1>
  </div>
</template>

<script>
import Header from '../Header/Main.vue'

  export default {
    name: "home",
    components: {
      Header
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