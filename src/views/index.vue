<template>
    <div>
        <Carousel />
        <BallNews />
        <ServiceBall />
        <BannerBall />
        <AboutUs />
        <BlogSections />
    </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import ServiceBall from '../components/ServiceBall.vue';
import BlogSections from '../components/BlogSections.vue';
import BannerBall from '../components/BannerBall.vue';
import AboutUs from '../components/AboutUs.vue';
import BallNews from '../components/FootBallNews/BallNews.vue';
</script>