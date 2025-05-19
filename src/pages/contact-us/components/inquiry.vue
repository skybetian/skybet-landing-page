<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import Message from 'primevue/message';
import { JOB_LIST } from '@constants/jobs.js';
import _ from 'underscore';

const props = defineProps({
    onSend: Function,
})

const router = useRouter()

const data = ref([]);
const searchQuery = ref('');

const schema = toTypedSchema(z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be at most 50 characters'),
    email: z
        .string()
        .email('Enter a valid email address'),
    phone: z
        .string()
        .max(14, 'Phone Number must be 11 digits'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message must be at most 500 characters'),
}))

const { values, handleSubmit, errors, defineField } = useForm({
    validationSchema: schema
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phone, phoneAttrs] = defineField('phone')
const [message, messageAttrs] = defineField('message')

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

const onSubmit = handleSubmit((values) => {
    const email = 'hr@skybetgaming.com';
    const subject = "Online Inquiry";
    const body = 'Name: ' + values.name + '\n' +
        'Email: ' + values.email + '\n' +
        'Phone: ' + values.phone + '\n' +
        'Message: ' + values.message;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');

    setTimeout(() => {
        props.onSend();
    }, 1000);
})

onMounted(() => {
    data.value = JOB_LIST
});

</script>
<template>
    <div class="w-full px-5 md:px-14 2xl:px-0 flex justify-center">
        <div class="w-full max-w-2xl xl:max-w-md pt-10 pb-18 md:pb-32 text-gray-100">
            <div>
                <h3
                    class="w-full pl-0 text-2xl md:text-3xl 2xl:text-4xl leading-8 md:leading-10 xl:leading-12 font-medium text-start uppercase">
                    We Would Like to hear <br> from you! </h3>
                <p class="text-sm lg:text-lg mt-3"> We’re here to help! Whether you have questions, feedback, or need
                    support, feel free to reach out to us anytime. Our team is dedicated to providing you with prompt
                    and friendly assistance. </p>
            </div>
            <div class="mt-8">
                <h5 class="text-lg lg:text-2xl md:mb-3 font-medium">E-MAIL</h5>
                <p>For general inquiry:&nbsp;inquiry@skybet.com.ph</p>
            </div>
            <div class="mt-8">
                <h5 class="text-lg lg:text-2xl md:mb-3 font-medium">MOBILE Number</h5>
                <p>(+63) 9999999999</p>
            </div>
            <form @submit.prevent="onSubmit()" class="flex flex-col gap-4 w-full mt-8">
                <h5 class="text-lg lg:text-2xl font-medium md:mb-5">ONLINE INQUIRY</h5>
                <div class="flex flex-col gap-6">
                    <div>
                        <InputText v-model="name" v-bind="nameAttrs" name="name" id="name" type="text"
                            placeholder="Name"
                            class="w-full h-12 !text-gray-100 border border-solid border-gray-100 !bg-white px-4 !rounded-none focus:!border-primary-100 focus:!outline-primary-100" />
                        <Message v-if="errors.name" severity="error" size="small" variant="simple">
                            {{ errors.name }}
                        </Message>
                    </div>
                    <div>
                        <InputText v-model="email" v-bind="emailAttrs" name="email" id="email" type="text"
                            placeholder="Email"
                            class="w-full h-12 !text-gray-100 border border-solid border-gray-100 !bg-white px-4 !rounded-none focus:!border-primary-100 focus:!outline-primary-100" />
                        <Message v-if="errors.email" severity="error" size="small" variant="simple">
                            {{ errors.email }}
                        </Message>
                    </div>
                    <div>
                        {{ phone }}
                        <InputMask v-model="phone" v-bind="phoneAttrs" name="phone" id="phone" type="text"
                            mask="9999-999-9999" placeholder="0912-345-6789"
                            class="w-full h-12 !text-gray-100 border border-solid border-gray-100 !bg-white px-4 !rounded-none focus:!border-primary-100 focus:!outline-primary-100" />
                        <Message v-if="errors.phone" severity="error" size="small" variant="simple">
                            {{ errors.phone }}
                        </Message>
                    </div>
                    <div>
                        <Textarea v-model="message" v-bind="messageAttrs" name="message" id="message" type="text"
                            placeholder="Message" cols="30" rows="5"
                            class="w-full !text-gray-100 border border-solid border-gray-100 !bg-white px-4 !rounded-none focus:!border-primary-100 focus:!outline-primary-100">
                        </Textarea>
                        <Message v-if="errors.message" severity="error" size="small" variant="simple">
                            {{ errors.message }}
                        </Message>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center mt-10">
                    <button type="submit"
                        class="uppercase px-10 py-3 bg-primary-300 rounded-full text-white cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 focus:ring-0 focus:outline-0">
                        SEND NOW
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>