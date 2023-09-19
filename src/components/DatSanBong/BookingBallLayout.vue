<template>
    <div>
      <!-- Header -->
      <TheHeader />
  
      <!-- Nội dung trang BookingBall -->
      <router-view></router-view>
  
      <!-- Footer -->
      <FooterBall />
    </div>
  </template>
  
  <script>
  import TheHeader from "@/components/TheHeader.vue";
  import FooterBall from "@/components/FooterBall.vue";
  
  export default {
    components: {
      TheHeader,
      FooterBall,
    },
  };
  </script>
  