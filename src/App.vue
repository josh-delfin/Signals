<template>
  <v-app>
    <v-main>
      <FullWidthLayout>
        <Home />
      </FullWidthLayout>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Home from './pages/Home.vue';
</script>

<style scoped>
.full-width-layout {
  width: 100%;
}
</style>
