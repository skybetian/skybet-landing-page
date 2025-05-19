<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
    job_title: String,
    job_description: String,
    onApply: Function,
})

const onApply = () => {
    const email = 'hr@skybetgaming.com';
    const subject = props.job_title;
    const body = '<Add your cover letter here or resume>';

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');

    setTimeout(() => {
        props.onApply();
    }, 1000);
};

</script>
<template>
    <div class="w-full px-5 md:px-14 2xl:px-0 flex justify-center">
        <div class="w-full max-w-2xl xl:max-w-xl pt-10 lg:pt-20 pb-10">
            <span v-html="job_description" class="pt-3 md:pt-5 text-sm lg:text-lg space-y-4 text-gray-100"></span>
            <div class="w-full flex items-center justify-center mt-18 mb-20">
                <button
                    @click="onApply"
                    class="uppercase px-10 py-3 bg-primary-300 rounded-full text-white cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 focus:outline-none focus:ring-0 focus:border-0">
                    APPLY NOW
                </button>
            </div>
        </div>
    </div>
</template>