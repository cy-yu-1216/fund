import {
  ElButton,
  ElTable,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElScrollbar
} from 'element-plus'
import 'element-plus/dist/index.css' //基础样式
import type { App } from 'vue'
const components = [
  ElButton,
  ElTable,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElScrollbar
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
