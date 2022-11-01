import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { registerApp } from './global'
import './permission'
// import { ElMessage } from 'element-plus'
import iconSvg from './base-ui/icon-svg/index.vue'

const app = createApp(App)

// const ElMessageCfg = { duration: 2000, customClass: 'globalElMessageStyle' }
// app.config.globalProperties.$ElMessage = (msg: string) => {
//   return ElMessage.success({ message: msg, ...ElMessageCfg })
// }

app.use(registerApp)
app.use(router)
app.use(pinia)

app.component('icon-svg', iconSvg)
app.mount('#app')
