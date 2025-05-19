<script setup>
import NavbarLayout from '@components/navbar/index.vue';
import Carousel from './components/carousel.vue';
import WhoIs from './components/whois.vue';
import CorporateValues from './components/corporate-values.vue';
import MissionVision from './components/mission-vision.vue';
import FooterLayout from '@components/footer/index.vue';
</script>
<template>
  <div>
    <NavbarLayout class="z-10 2xl:px-0"/>
    <Carousel />
    <WhoIs />
    <CorporateValues />
    <MissionVision />
    <FooterLayout/>
  </div>
</template>