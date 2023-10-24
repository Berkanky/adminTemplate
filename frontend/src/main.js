import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'  
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";




const app = createApp(App)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)
// Optionally install the BootstrapVue icon components plugin


app.mount('#app')
