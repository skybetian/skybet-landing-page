<script setup>
import Carousel from 'primevue/carousel';

const cards = [
    {
        background_color: 'bg-white',
        text_color: 'text-gray-100',
        icon: 'icon-1.png',
        title: 'Growth & Excellence',
        description: 'We strive for continuous growth, setting new industry benchmarks through excellence in operations, customer service, and product development while staying ahead of market trends.',
    },
    {
        background_color: 'bg-primary-100',
        text_color: 'text-white',
        icon: 'icon-2.png',
        title: 'Network of Trust & Security',
        description: 'We build strong relationships with our stakeholders by ensuring data protection, financial security, and fair gaming practices to create a trustworthy and reliable gaming platform.',
    },
    {
        background_color: 'bg-white',
        text_color: 'text-gray-100',
        icon: 'icon-3.png',
        title: 'Inclusivity & Customer Centricity',
        description: 'We embrace cutting-edge technology and continuously improve our gaming platforms to provide exciting, immersive, and state-of-the-art experiences for our customers.',
    },
    {
        background_color: 'bg-primary-100',
        text_color: 'text-white',
        icon: 'icon-4.png',
        title: 'Inclusivity & Customer Centricity',
        description: 'We strive for continuous growth, setting new industry benchmarks through excellence in operations, customer service, and product development while staying ahead of market trends.',
    },
    {
        background_color: 'bg-white',
        text_color: 'text-gray-100',
        icon: 'icon-5.png',
        title: 'Inclusivity & Customer Centricity',
        description: 'We create a welcoming and engaging environment for all gaming enthusiasts, ensuring our products and services cater to diverse preferences while prioritizing customer satisfaction.',
    },
    {
        background_color: 'bg-primary-100',
        text_color: 'text-white',
        icon: 'icon-6.png',
        title: 'Network of Trust & Security',
        description: 'We build strong relationships with our stakeholders by ensuring data protection, financial security, and fair gaming practices to create a trustworthy and reliable gaming platform.',
    },
];
</script>
<template>
    <div class="w-full flex items-center justify-center corporate-container px-5 md:px-14 2xl:px-0">
        <div
            class="w-full max-w-2xl xl:max-w-xl py-10 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-8">
            <div>
                <h3
                    class="text-white text-xl md:text-3xl lg:text-4xl font-bold custom-text-shadow text-center lg:text-start">
                    THESE IS OUR
                </h3>
                <h3 class="text-primary-300 font-bold text-3xl md:text-4xl lg:text-5xl custom-text-shadow">CORPORATE
                    VALUES</h3>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-2 md:gap-5 lg:gap-6 xl:px-5">
                <div v-for="(card, key) in cards" :key="key"
                    class="rounded-2xl flex flex-col justify-center items-center p-5 xl:p-8 min-h-96 sm:min-h-56 md:min-h-96"
                    :class="card.background_color">
                    <img :src="'./assets/img/corporate/' + card.icon" alt="icon"
                        class="w-32 sm:w-32 md:w-28 xl:w-28 2xl:w-32">
                    <h3 class="mt-5 text-2xl sm:text-sm md:text-xl lg:text-lg 2xl:text-2xl text-center font-bold"
                        :class="card.text_color">{{ card.title }}</h3>
                    <p class="mt-2 text-sm sm:text-2xs md:text-xs lg:text-sm" :class="card.text_color">{{
                        card.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>