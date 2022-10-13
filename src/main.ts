import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { registerApp } from './global'
import './permission'

const app = createApp(App)

app.use(registerApp)
app.use(router)
app.use(pinia)
app.mount('#app')
