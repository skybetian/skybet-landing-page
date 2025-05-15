<template>
  <div>
    <NavbarLayout class="z-10 2xl:px-0" />
    <HeaderLayout />
    <JobDetails />
    <FooterLayout />
  </div>
</template>

<script>
import NavbarLayout from '@components/navbar/index.vue';
import HeaderLayout from './components/header.vue';
import JobDetails from './components/job-details.vue';
import FooterLayout from '@components/footer/index.vue';

export default {
  name: 'Careers Details',
  components: {
    NavbarLayout,
    HeaderLayout,
    JobDetails,
    FooterLayout,
  },
}
</script>