import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index.ts'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(naive).mount('#app')
