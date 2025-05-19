<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { JOB_LIST } from '@constants/jobs.js';
import _ from 'underscore';

const router = useRouter()

const data = ref([]);
const searchQuery = ref('');

const onSearch = () => {
    const input = searchQuery.value;

    data.value = _.filter(JOB_LIST, (item) => {
        return item.title.toLowerCase().includes(input.toLowerCase());
    })

}

const onRedirect = (id) => {
    router.push({
        name: 'careers-details',
        params: {
            id: id
        },
    })
}

onMounted(() => {
    data.value = JOB_LIST
});

</script>
<template>
    <div class="w-full px-5 md:px-14 2xl:px-0 flex justify-center">
        <div class="w-full max-w-2xl xl:max-w-xl pt-10 pb-18">
            <div class="flex flex-col-reverse md:flex-row gap-5 item-start md:items-center justify-between">
                <h3 class="text-gray-100 text-sm md:text-xl lg:text-lg 2xl:text-2xl md:text-center font-bold">
                    OPEN POSITIONS
                </h3>
                <div
                    class="flex flex-row items-center gap-2 px-3 rounded-2xl border border-solid border-gray-200 bg-light-blue-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.6171 19.3587C19.1029 19.8779 18.2655 19.8819 17.7462 19.3676L15.9911 17.6293L17.8531 15.7495L19.6082 17.4878C20.1271 18.0021 20.1311 18.8395 19.6171 19.3587ZM16.9133 14.8168L15.0514 16.6967L11.9967 13.6712L13.8586 11.7913L16.9133 14.8168Z"
                            fill="#8A93A1" />
                        <path d="M17.853 15.7476L15.9912 17.6275L15.0514 16.6967L16.9133 14.8168L17.853 15.7476Z"
                            fill="#8A93A1" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2 7.64636C2 9.14387 2.59488 10.58 3.65378 11.6389C4.71268 12.6978 6.14885 13.2927 7.64636 13.2927C9.14387 13.2927 10.58 12.6978 11.6389 11.6389C12.6978 10.58 13.2927 9.14387 13.2927 7.64636C13.2927 6.14885 12.6978 4.71268 11.6389 3.65378C10.58 2.59488 9.14387 2 7.64636 2C6.14885 2 4.71268 2.59488 3.65378 3.65378C2.59488 4.71268 2 6.14885 2 7.64636ZM2.23957 13.0532C0.805596 11.6192 0 9.6743 0 7.64636C0 5.61842 0.805596 3.67354 2.23957 2.23957C3.67354 0.805596 5.61842 0 7.64636 0C9.6743 0 11.6192 0.805596 13.0532 2.23957C14.4871 3.67354 15.2927 5.61842 15.2927 7.64636C15.2927 9.6743 14.4871 11.6192 13.0532 13.0532C11.6192 14.4871 9.6743 15.2927 7.64636 15.2927C5.61842 15.2927 3.67354 14.4871 2.23957 13.0532Z"
                            fill="#8A93A1" />
                    </svg>
                    <input v-model="searchQuery" @input="onSearch" type="text" placeholder="Search Jobs"
                        class="w-72 h-12 outline-0 border-0">
                </div>
            </div>
            <div v-if="data?.length"
                class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 pt-3 md:pt-10">
                <div v-for="(job, key) in data" :key="key" @click="onRedirect(job.id)"
                    class="rounded-xl job-custom text-white p-5 pb-5 md:pb-7 xl:pb-10 space-y-3 lg:space-y-4 transition-transform ease-out duration-500 cursor-pointer hover:scale-105">
                    <h3 class="text-sm md:text-xl lg:text-lg 2xl:text-2xl font-bold uppercase line-clamp-1">
                        {{ `${job.urgent ? 'URGENT:' : ''}` }} {{ job.title }} ({{ job.workplace }})
                    </h3>
                    <span v-html="job.description" class="text-2xs md:text-xs lg:text-sm line-clamp-3"></span>
                    <div @click="job.onClick"
                        class="flex flex-row items-center p-1 rounded-full bg-white w-fit border border-solid border-primary-300 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300">
                        <div class="view-job-arrow w-7 h-7 rounded-full flex items-center justify-center">
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.20652 6.96843L1.97499 12.1043C1.4261 12.6432 0.526781 12.0282 0.852395 11.3341L3.00455 6.77358C3.09138 6.59092 3.09138 6.38086 3.00455 6.20124L0.852395 1.63767C0.526781 0.946593 1.4261 0.328579 1.97499 0.867439L7.20652 6.00335C7.47632 6.27126 7.47632 6.70356 7.20652 6.96843Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <span class="px-4 text-sm sm:text-2xs md:text-xs lg:text-sm text-gray-100">VIEW JOB</span>
                    </div>
                </div>
            </div>
            <div v-else class="flex justify-center items-center pt-32 pb-16">
                <h3 class="text-gray-100 text-sm md:text-xl lg:text-lg 2xl:text-2xl font-bold text-center"> 
                    Oops! We couldn't find any jobs matching your search.
                </h3>
            </div>
        </div>
    </div>
</template>