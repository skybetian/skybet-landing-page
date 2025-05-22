<script setup>
import { Avatar, Button, Drawer } from "primevue";
import { ref, watch } from "vue";

const visibleSidebar = ref(false)

const props = defineProps({
    visible: Boolean,
})

const emit = defineEmits(['update:visible'])

const onClose = () => {
    emit('update:visible', false)
}

watch(() => props.visible, (val) => {
    visibleSidebar.value = val
})

watch(() => visibleSidebar.value, (val) => {
    emit('update:visible', val)
})
</script>
<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visibleSidebar" :modal="false">
            <template #container="{ closeCallback }">
                <div class="flex flex-col h-full">
                    <div class="flex items-center justify-center px-6 pt-4 shrink-0">
                        <span class="inline-flex items-center gap-2">
                            <RouterLink to="/">
                                <img src="/assets/img/logo.png" alt="logo">
                            </RouterLink>
                        </span>
                        <div class="absolute pt-4 top-4 -right-4">
                            <Button class="!border-primary-100  !bg-primary-100 !text-white" type="button" @click="onClose" icon="pi pi-times" rounded outlined></Button>
                        </div>
                    </div>
                    <div class="overflow-y-auto">
                        <ul class="list-none py-4 m-0">
                            <li>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li class="group px-4 hover:bg-primary-100 transition-colors duration-300">
                                        <a v-ripple
                                            class="group-hover:!text-white flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">HOME</span>
                                        </a>
                                    </li>
                                    <li class="group px-4 hover:bg-primary-100 transition-colors duration-300">
                                        <a v-ripple
                                            class="group-hover:!text-white flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-crown mr-2"></i>
                                            <span class="font-medium">BLCUKY</span>
                                        </a>
                                    </li>
                                    <li class="group px-4 hover:bg-primary-100 transition-colors duration-300">
                                        <a v-ripple
                                            class="group-hover:!text-white flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-briefcase mr-2"></i>
                                            <span class="font-medium">CAREERS</span>
                                        </a>
                                    </li>
                                    <li class="group px-4 hover:bg-primary-100 transition-colors duration-300">
                                        <a v-ripple
                                            class="group-hover:!text-white flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-phone mr-2"></i>
                                            <span class="font-medium">CONTACT US</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </Drawer>
    </div>
</template>