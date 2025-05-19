<script setup>

defineProps({
  job_title: String,
  workplace: {
    type: String,
  },
  urgent: {
    type: Boolean,
    default: false
  }
})


</script>
<template>
    <div class="overflow-hidden">
        <div>
            <div class="w-full custom-header-bg absolute flex justify-center pt-20 px-5 md:px-0">
                <div
                    class="w-full max-w-2xl xl:max-w-xl h-full flex-col md:flex-row flex justify-center md:justify-between items-center">
                    <span class="lg:pl-14 xl:pl-0 w-full lg:w-6/12 text-white text-4xl md:text-5xl 2xl:text-6xl leading-16 md:leading-18 xl:leading-20 font-bold custom-text-shadow text-center lg:text-start">
                        {{ `${urgent ? 'URGENT:' : ''}` }} {{ job_title }} ({{ workplace }})
                    </span>
                </div>
            </div>
            <img src="/assets/img/careers-details.png" alt="careers" class="w-full custom-header-bg" />
        </div>
    </div>
</template>