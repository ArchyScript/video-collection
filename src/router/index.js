import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "about" */ '../components/Home/Main.vue')
const About = () => import(/* webpackChunkName: "about" */ '../components/About/Main.vue')
// const Profile = () => import(/* webpackChunkName: "about" */ '../components/Profile/Main.vue')
const Media = () => import(/* webpackChunkName: "about" */ '../components/Media/Main.vue')

// import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: "/",
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
    redirect: "/",
    component: Home
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
