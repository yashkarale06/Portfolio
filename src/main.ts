import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global styles
import './assets/styles/main.scss'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
