<script setup>
import { ref, computed } from 'vue';
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

const carouselRef = ref(null);
const page = ref(0);
const numVisible = 1;

const totalPages = computed(() =>
  Math.ceil(items.length / numVisible)
);

const onNext = () => {
    console.log(page.value);
    page.value = (page.value + 1) % totalPages.value;
}


const onPrev = () => {    
    console.log(page.value);
    page.value = (page.value - 1 + totalPages.value) % totalPages.value;
}

</script>
<template>
    <div class="overflow-hidden relative">
        <Carousel ref="carouselRef" :value="items" :page="page" :numVisible="numVisible" :numScroll="1" :showNavigators="false"
            :showIndicators="false" circular>
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
        <div class="w-full absolute top-1/2 left-0 z-20 px-5 md:px-14 2xl:px-0 flex justify-center items-center">
            <div class="w-full max-w-2xl xl:max-w-xl h-full flex flex-row justify-between">
                <div @click="onPrev" class="h-fit cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300">
                    <svg class="w-5 md:w-8 xl:w-10" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-0.5" y="0.5" width="39" height="39" rx="9.5" transform="matrix(-1 0 0 1 39 0)"
                            stroke="white" />
                        <path d="M29 8L16.202 19.8235L29 31.6471L10.2794 19.8235L29 8Z" fill="white" />
                    </svg>
                </div>
                <div @click="onNext" class="h-fit cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300">
                    <svg class="w-5 md:w-8 xl:w-10" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" />
                        <path d="M11 8L23.798 19.8235L11 31.6471L29.7206 19.8235L11 8Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>