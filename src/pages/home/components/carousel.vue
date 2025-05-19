<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';

const items = [
    {
        background: './assets/img/carousel/carousel-bg-1.png',
        description: "WE <span class='text-primary-200'>HELP</span> YOU <br/> TURN YOUR <span class='text-primary-200'>IDEAS</span> <br/> INTO <span class='text-primary-200'>REALITY</span>",
        img: './assets/img/carousel/carousel-img-1.png',
    },
    {
        background: './assets/img/carousel/carousel-bg-2.png',
        description: "WE <span class='text-primary-200'>HELP</span> YOU <br/> TURN YOUR <span class='text-primary-200'>IDEAS</span> <br/> INTO <span class='text-primary-200'>REALITY</span>",
        img: './assets/img/carousel/carousel-img-2.png',
    },
    {
        background: './assets/img/carousel/carousel-bg-3.png',
        description: "WE <span class='text-primary-200'>HELP</span> YOU <br/> TURN YOUR <span class='text-primary-200'>IDEAS</span> <br/> INTO <span class='text-primary-200'>REALITY</span>",
        img: './assets/img/carousel/carousel-img-3.png',
    },
    {
        background: './assets/img/carousel/carousel-bg-4.png',
        description: "WE <span class='text-primary-200'>HELP</span> YOU <br/> TURN YOUR <span class='text-primary-200'>IDEAS</span> <br/> INTO <span class='text-primary-200'>REALITY</span>",
        img: './assets/img/carousel/carousel-img-4.png',
    },
    {
        background: './assets/img/carousel/carousel-bg-5.png',
        description: "WE <span class='text-primary-200'>HELP</span> YOU <br/> TURN YOUR <span class='text-primary-200'>IDEAS</span> <br/> INTO <span class='text-primary-200'>REALITY</span>",
        img: './assets/img/carousel/carousel-img-5.png',
    },
];

const activeCarousel = ref(0)
</script>
<template>
    <div class="overflow-hidden">
        <Carousel :value="items" :page="activeCarousel" :numVisible="1" :numScroll="1" :showNavigators="false"
            :showIndicators="false">
            <template #item="slotProps">
                <div class="w-full custom-carousel absolute flex justify-center pt-20 px-5 md:px-0">
                    <div
                        class="w-full max-w-2xl xl:max-w-xl h-full flex-col md:flex-row flex justify-center md:justify-between items-center">
                        <span
                            class="text-white -mb-14 sm:-mb-18 md:mb-0 text-5xl md:text-6xl xl:text-7xl leading-16 md:leading-18 xl:leading-20 md:pl-14 xl:pl-0 font-bold custom-text-shadow text-center md:text-start"
                            v-html="slotProps.data.description"></span>
                        <img :src="slotProps.data.img" :alt="slotProps.data.img"
                            class="w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 md:-mt-20">
                    </div>
                </div>
                <img :src="slotProps.data.background" :alt="slotProps.data.background" class="w-full custom-carousel" />
            </template>
        </Carousel>
    </div>
</template>