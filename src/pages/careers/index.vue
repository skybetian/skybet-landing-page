<template>
  <div>
    <NavbarLayout class="z-10 2xl:px-0"/>
    <Carousel />
    <!-- <WhoIs />
    <CorporateValues />
    <MissionVision />
    <FooterLayout/> -->
  </div>
</template>

<script>
import NavbarLayout from '@components/navbar/index.vue';
import Carousel from './components/carousel.vue';

export default {
  name: 'Careers',
  components: {
    NavbarLayout,
    Carousel,
  },
}
</script>