import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import VueResource from 'vue-resource'

createApp(App).use(router,axios,VueResource).mount('#app')
