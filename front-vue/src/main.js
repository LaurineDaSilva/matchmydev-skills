import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axiosConfig from './plugins/axiosConfig';

const app = createApp(App);

app.use(router);

app.use(axiosConfig);

app.mount('#app');
