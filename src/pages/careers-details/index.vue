<script setup>
import NavbarLayout from '@components/navbar/index.vue';
import HeaderLayout from './components/header.vue';
import JobDetails from './components/job-details.vue';
import FooterLayout from '@components/footer/index.vue';
import SuccessApply from '@components/modals/success-apply.vue';
import { useRoute } from 'vue-router';
import { JOB_LIST } from '@constants/jobs.js';
import { ref, onMounted } from 'vue';
import _ from 'underscore';

const route = useRoute(); 

const data = ref(null);
const visible = ref(false);

const onApply = () => {
    visible.value = true;
};

onMounted(() => {
    data.value = _.find(JOB_LIST, (item) => {
        return item.id == route.params.id;
    });
});

</script>

<template>
  <div>
    <NavbarLayout class="z-10 2xl:px-0" />
    <HeaderLayout :job_title="data?.title" :workplace="data?.workplace" :urgent="data?.urgent"/>
    <JobDetails :job_title="data?.title" :job_description="data?.description" :onApply="onApply"/>
    <FooterLayout />
    <SuccessApply v-model:visible="visible" />
  </div>
</template>
