<template>
  <div class="wrapper">
    <TheHeader />
    <router-view class="bookingball" />
    <FooterBall />
  </div>
</template>

<script setup>

import TheHeader from './components/TheHeader.vue';
import FooterBall from './components/FooterBall.vue';

</script>
<style scoped>

</style>  