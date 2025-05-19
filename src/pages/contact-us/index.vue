<script setup>
import NavbarLayout from '@components/navbar/index.vue';
import HeaderLayout from './components/header.vue';
import Inquiry from './components/inquiry.vue';
import FooterLayout from '@components/footer/index.vue';
import SuccessApply from '@components/modals/success.vue';
import { ref } from "vue";

const visible = ref(false);

const onSend = () => {
  visible.value = true;
};

</script>
<template>
  <div>
    <NavbarLayout class="z-10 2xl:px-0" />
    <HeaderLayout />
    <Inquiry :onSend="onSend"/>
    <SuccessApply v-model:visible="visible" header="Your inquiry has been submitted successfully!"
      description="We will get back to you as soon as possible." />
  </div>
</template>