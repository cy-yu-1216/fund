import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { registerApp } from './global'
import './permission'
// import { ElMessage } from 'element-plus'
import iconSvg from './base-ui/icon-svg/index.vue'
import directive from './utils/directive'
// let flag = navigator.userAgent
//   .toLowerCase()
//   .match(
//     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
//   )
// console.log(navigator.userAgent.toLowerCase())
const app = createApp(App)
// const ElMessageCfg = { duration: 2000, customClass: 'globalElMessageStyle' }
// app.config.globalProperties.$ElMessage = (msg: string) => {
//   return ElMessage.success({ message: msg, ...ElMessageCfg })
// }
directive(app)
app.use(registerApp)
app.use(router)
app.use(pinia)

app.component('icon-svg', iconSvg)
app.mount('#app')
