import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router.js'

import '@/assets/css/custom.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
});

const head = createHead({
    init: [
        {
            title: 'علی سجادی - طراح و توسعه‌دهنده فول استک',
            titleTemplate: 'SajadiDev - %s',
            htmlAttrs: {lang: 'fa', dir: 'rtl'}
        }
    ]
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(head);
app.use(createPinia());
app.mount('#app');