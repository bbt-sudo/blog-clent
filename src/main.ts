import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index.ts'
import pinia from './store/index.ts'
import naive from 'naive-ui'

createApp(App).use(router).use(pinia).use(naive).mount('#app')
