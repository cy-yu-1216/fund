import { ElButton, ElTable, ElInput } from 'element-plus'
import 'element-plus/dist/index.css' //基础样式
import type { App } from 'vue'
const components = [ElButton, ElTable, ElInput]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
