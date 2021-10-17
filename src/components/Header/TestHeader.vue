<template>
  <v-card
    class="mx-auto overflow-hidden"
  >
    <!-- :height="height" -->
    <v-app-bar
      flat
      fixed
    >
      <div class="d-flex justify-center align-center">
        <!-- <v-app-bar-nav-icon @click="drawer = true" outlined></v-app-bar-nav-icon> -->

        <router-link to="/">
          <v-img
            alt="Facebook Logo"
            class="mx-2 rounded-circle"
            contain
            transition="scale-transition" 
            width="45"
          />
        </router-link>

        <!-- <v-text-field
          class="my-3 align-center"
          type="search"
          placeholder="Search"
          filled
          rounded
          dense
          prepend-inner-icon="mdi-pencil"
        ></v-text-field> -->
      </div>

      <v-spacer></v-spacer>

      <!-- Topbar tabs -->
      <div v-for="(eachTopbarRoute, index) in allTopbarRoutes" :key="index">
        <div 
          :class="eachTopbarRoute.status == 'active' ? 'active' : ''"
          class="mx-1 px-4 py-1 mt-5"
          @click="toggleActiveTabs(eachTopbarRoute.tabName)"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <router-link :to="eachTopbarRoute.linkRoutes">
                <v-badge
                  :color="eachTopbarRoute.badgeColor"
                  :content="eachTopbarRoute.badgeContent"
                  class="rounded-pill"
                >
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    outlined
                    depressed
                  >
                    <v-icon
                      class="lg_icon" 
                      :color="eachTopbarRoute.status == 'active' ? 'blue' : ''"
                    >
                      {{ eachTopbarRoute.iconName }} 
                    </v-icon>
                  </v-btn>
                </v-badge>
              </router-link>
            </template>

            <span> {{ eachTopbarRoute.linkTooltip }} </span>
          </v-tooltip>
        </div>
      </div>

      <v-spacer></v-spacer>

      <!-- Profile Links -->
      <div class="d-flex">
        <div class="d-flex justify-center align-center mr-2">
          <router-link to="/">
            <v-img
              alt="Profile Picture"
              class="mx-2 rounded-circle"
              contain
              transition="scale-transition"
              width="45"
            />
          </router-link>

          <router-link to="/">
            <span class="mx-3 align-center"> 
              Dasaolu Daniel
            </span>
          </router-link>
        </div>

        <div v-for="(profileSectionLink) in allMenuLinks" :key="profileSectionLink.tabName">
          <v-menu
            top
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                color=""
                v-bind="attrs"
                v-on="on"
                class="px-1 mx-1"
                outlined
                :title="profileSectionLink.tabName"
              >
                <v-icon> {{ profileSectionLink.iconName }} </v-icon>
              </v-btn>
            </template>
            
            <v-list>
              <v-list-item
                v-for="(eachMenuLinkItem) in profileSectionLink.menuLinkTabItems"
                :key="eachMenuLinkItem.title" 
              >
                <v-list-item-title :title="eachMenuLinkItem.title" style="cursor: pointer;"> {{ eachMenuLinkItem.title }} </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>
    <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-blue--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      height: 1000,
      profile_picture: "../../imgs/user_profile.png",
      logo_src: "../../imgs/logo_1.png",
      allTopbarRoutes: [
        {tabName: "home", iconName: "mdi-home", badgeContent: "3", badgeColor: "pink", linkTooltip: "Home", linkRoutes: "/home", status: "active"},
        {tabName: "about", iconName: "mdi-magnify", badgeContent: "4", badgeColor: "green", linkTooltip: "About", linkRoutes: "/", status: ""},
        {tabName: "mark", iconName: "mdi-account", badgeContent: "8", badgeColor: "blue", linkTooltip: "Message", linkRoutes: "/", status: ""},
        {tabName: "vid", iconName: "mdi-pencil", badgeContent: "2", badgeColor: "red", linkTooltip: "Marketplace", linkRoutes: "/", status: ""},
        {tabName: "not", iconName: "mdi-video", badgeContent: "12", badgeColor: "green", linkTooltip: "Message", linkRoutes: "/", status: ""},
      ],
      allMenuLinks: [
        { 
          tabName: "profile",
          iconName: "mdi-home",
          menuLinkTabItems: [
            {title: "Item ", toolTipValue: "Text Me"},
            {title: "Item 1", toolTipValue: "Text Me 1"},
            {title: "Item 2", toolTipValue: "Text Me 2"},
            {title: "Item 3", toolTipValue: "Text Me 3"},
          ]
        },
        { 
          tabName: "Text",
          iconName: "mdi-home",
          menuLinkTabItems: [
            {title: "Item", toolTipValue: "Text Me"},
            {title: "Item 1", toolTipValue: "Text Me 1"},
            {title: "Item 2", toolTipValue: "Text Me 2"},
            {title: "Item 3", toolTipValue: "Text Me 3"},
          ]
        },
        { 
          tabName: "Notification",
          iconName: "mdi-bell",
          menuLinkTabItems: [
            {title: "Item", toolTipValue: "Text Me"},
            {title: "Item 1", toolTipValue: "Text Me 1"},
            {title: "Item 2", toolTipValue: "Text Me 2"},
            {title: "Item 3", toolTipValue: "Text Me 3"},
          ]
        },
        { 
          tabName: "Profile",
          iconName: "mdi-dots-vertical",
          menuLinkTabItems: [
            {title: "Item", toolTipValue: "Text Me"},
            {title: "Item 1", toolTipValue: "Text Me 1"},
            {title: "Item 2", toolTipValue: "Text Me 2"},
            {title: "Item 3", toolTipValue: "Text Me 3"},
          ]
        },
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
    }),

    methods: {
      toggleActiveTabs (event) {
        // Add active class to tabs onclick
        return this.allTopbarRoutes.forEach(element => element.status = (element.tabName == event) ?  "active" : "");
      },

    }
  }
</script>
 
<style scoped>
  .active  {
    color: black;
    border-bottom: 3px solid blue;
  }

  .lg_icon {
    font-size: 1.5rem;
  }
</style>