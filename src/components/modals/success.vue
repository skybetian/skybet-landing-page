<script setup>
import Dialog from 'primevue/dialog';
import { ref, watch } from "vue";

const visibleModal = ref(false)

const props = defineProps({
    visible: Boolean,
    header: String,
    description: String,
})

const emit = defineEmits(['update:visible'])

const onClose = () => {
    emit('update:visible', false)
}

watch(() => props.visible, (val) => {
    visibleModal.value = val
})

</script>

<template>
    <Dialog v-model:visible="visibleModal" pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
        <template #container="{ closeCallback }">
            <div class="rounded-2xl p-1 custom-border-modal relative">
                <div @click="onClose"
                    class="absolute text-white rounded-full -top-1 -right-1 bg-primary-400 w-6 h-6 flex items-center justify-center cursor-pointer">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L1 10M1 1L10 10" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="flex items-center justify-center bg-white rounded-2xl shadow-lg">
                    <div class="w-full max-w-2xl xl:max-w-xl p-5 md:p-10 lg:p-14">
                        <div class="flex flex-col items-center justify-center">
                            <img src="/assets/img/logo.png" alt="logo">
                            <h3
                                class="text-gray-100 text-sm md:text-xl lg:text-lg 2xl:text-2xl md:text-center font-bold pt-5">
                                {{ props.header }}
                            </h3>
                            <p class="text-gray-100 text-sm md:text-base lg:text-lg 2xl:text-xl text-center pt-3">
                                {{ props.description }}
                            </p>
                            <button @click="onClose"
                                class="uppercase px-10 py-3 bg-primary-300 rounded-full text-white cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 mt-5">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Dialog>
</template>