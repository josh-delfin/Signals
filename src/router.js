import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue';
import About from '../components/About.vue';
import Navbar from '../components/Navbar.vue';
import MembersEntry from '../components/MembersEntry.vue'; // Import MembersEntry component
import BuyPackage from '../components/BuyPackage.vue'; // Import BuyPackage component

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      navbar: Navbar,
    },
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: About,
      navbar: Navbar,
    },
  },
  {
    path: '/members', // Route for Members Entry
    name: 'MembersEntry',
    components: {
      default: MembersEntry,
      navbar: Navbar,
    },
  },
  {
    path: '/buy-package', // Route for Buy Package
    name: 'BuyPackage',
    components: {
      default: BuyPackage,
      navbar: Navbar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
