import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Profile from "../components/Profile/Profile.vue";

const Home = () => import(/* webpackChunkName: "about" */ '../components/Home/Main.vue')
const About = () => import(/* webpackChunkName: "about" */ '../components/About/Main.vue')
const Profile = () => import(/* webpackChunkName: "about" */ '../components/Profile/Main.vue')
const Media = () => import(/* webpackChunkName: "about" */ '../components/Media/Main.vue')

import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect: "/home",
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/media",
    name: "Media",
    component: Media
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
