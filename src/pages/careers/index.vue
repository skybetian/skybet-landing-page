<script setup>
import NavbarLayout from '@components/navbar/index.vue';
import HeaderLayout from './components/header.vue';
import Positions from './components/positions.vue';
import FooterLayout from '@components/footer/index.vue';
import GetInTouch from './components/get-in-touch.vue';
</script>
<template>
  <div>
    <NavbarLayout class="z-10 2xl:px-0" />
    <HeaderLayout />
    <Positions />
    <GetInTouch />
  </div>
</template>