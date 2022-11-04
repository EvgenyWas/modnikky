import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyLoad from 'vue-lazyload';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueLazyLoad, {
    preload: 1.3,
    observer: true,
    loading: '/public/preloader.gif',
});

app.mount('#app');
