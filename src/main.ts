import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import Navbar from './components/Header/Navbar.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Packages from './pages/Packages.vue';
import Contact from './pages/Contact.vue';
import Members from './pages/Members.vue';
import BuyPackage from './pages/BuyPackage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/packages', component: Packages },
    { path: '/contact', component: Contact },
    { path: '/members', component: Members },
    { path: '/buy-package', component: BuyPackage },
  ],
});

const vuetify = createVuetify();

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.component('Navbar', Navbar);
app.mount('#app');