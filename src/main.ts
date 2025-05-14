import { createApp } from 'vue'
import App from './App.vue'

// router
import router from './router'

// styles
import '@assets/css/tailwind.css'
import '@assets/css/custom.css'

// ui framework
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import { RouterLink } from 'vue-router'

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('RouterLink', RouterLink)
app.mount('#app');
