import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*引入标准化CSS*/
import '@/assets/css/normalize/normalize.css'
import '@/assets/css/normalize/myStandrad.css'

createApp(App).use(store).use(router).mount('#app')
