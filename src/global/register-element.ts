import {
  ElButton,
  ElTable,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElScrollbar,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDialog,
  ElDatePicker,
  ElCascader,
  ElPopover
} from 'element-plus'
import 'element-plus/dist/index.css' //基础样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
const components = [
  ElButton,
  ElTable,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElScrollbar,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDialog,
  ElDatePicker,
  ElCascader,
  ElPopover
]
export default function (app: App): void {
  //图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  //组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
