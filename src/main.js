import { createApp } from 'vue'
import App from './App.vue'

// styles
import '@assets/css/tailwind.css'
import '@assets/css/custom.css'

// ui framework
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'

// icons
import 'primeicons/primeicons.css'

// router
// import { RouterLink } from 'vue-router'
import router from './router'

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
// app.component('RouterLink', RouterLink)
app.mount('#app');

