<template>
    <v-tabs
        app
        fixed-tabs
        flat
        centered
        color="deep-purple accent-4"
        slider-color="deep-purple"
    >
        <v-tab
            v-for="eachTopbarRoute in allTopbarRoutes"
            :key="eachTopbarRoute.tabName"
            @click="goToPage(eachTopbarRoute.linkRoute)"
        >   
            <!-- <v-icon class="mr-4">{{ eachTopbarRoute.iconName }}</v-icon> -->
            {{ eachTopbarRoute.tabName }}
        </v-tab>
    </v-tabs>
</template>

<script>
  export default {
    data: () => ({
      currentItem: 'tab-Web',
      allTopbarRoutes: [
        { tabName: "home", iconName: "mdi-home", linkTooltip: "Home", linkRoute: "/", },
        { tabName: "about", iconName: "mdi-magnify", linkTooltip: "About", linkRoute: "/about",},
        { tabName: "media", iconName: "mdi-pencil", linkTooltip: "Marketplace", linkRoute: "/media",},
        // { tabName: "profile", iconName: "mdi-account", linkTooltip: "Message", linkRoute: "/profile",},
      ]
    }),

    methods: {
        goToPage(eachTabRouteLink) {
            this.$router.push(`${eachTabRouteLink}`)
            console.log(eachTabRouteLink)
        }
    }
  }
</script>