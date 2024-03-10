<template>
  <v-container>
    <!-- Use the imported component -->
    <Navbar />
    <Banner />
    <Counter />
  </v-container>
</template>

<script>
// Import the component containing your content
import Navbar from '@/components/Header/Navbar.vue'
import Banner from '@/components/Section/Banner.vue';
import Counter from '@/components/Section/Counter.vue';
export default {
  name: 'PageComponent',
  components: {
    Navbar,
    Banner,
    Counter,

  },
};
</script>