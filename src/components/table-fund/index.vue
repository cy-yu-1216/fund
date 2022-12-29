<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in tableConfig.column"
      :key="item.prop"
      :prop="item.prop"
      :sortable="item.sortable == null ? true : item.sortable"
      :label="item.label"
      :width="item.width"
      :fixed="item.fixed"
      :show-overflow-tooltip="item.showOverflowTooltip"
      :align="item.align"
    >
      <template #header="scope" v-if="item.header || item.headerRender">
        <slot
          v-if="item.header"
          :name="`header${item.header}`"
          :row="scope.row"
          :index="scope.$index"
        />
        <template v-if="item.headerRender">
          <render :render="item.headerRender" :scope="scope" />
        </template>
      </template>
      <template #default="scope" v-if="item.slot || item.render">
        <slot
          v-if="item.slot && !item.popover"
          :name="item.slot"
          :row="scope.row"
          :index="scope.$index"
        />
        <!-- 长按 -->
        <el-popover
          placement="bottom"
          :visible="scope.row.visible"
          v-if="item.popover"
        >
          <!-- 长按的内容显示 -->
          <slot name="popoverContent" :row="scope.row"></slot>
          <template #reference>
            <div v-touch:[scope.row]="handlePopoveTouch">
              <!-- 长按啥 -->
              <slot name="popover" :row="scope.row">{{
                scope.row[item.prop]
              }}</slot>
            </div>
          </template>
        </el-popover>
        <template v-if="item.render">
          <render :render="item.render" :scope="scope" />
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import {
  toRefs,
  onMounted,
  getCurrentInstance,
  ref,
  reactive,
  watch,
  onUnmounted
} from 'vue'
import render from './render.vue'
import { mainStore } from '@/store/main-store'

const props = defineProps({
  tableConfig: {
    type: Object,
    default() {
      return {}
    }
  },
  tableData: {
    type: Array,
    default() {
      return []
    }
  }
})
const propsRef = toRefs(props)
const tableConfig = propsRef.tableConfig
const tableData = propsRef.tableData.value.map((res: any) => {
  res.visible = false
  return res
})

let activeEl: any = reactive({ first: true }) //当前活跃dom 行
let activeRow: any = reactive({}) //当前活跃行数据

//监听store中屏幕宽度的变化
let clientWidth = ref(mainStore.clientWidth)
watch(
  () => mainStore.getClientWidth,
  (newData) => {
    clientWidth.value = newData
  }
)

//监听鼠标点击
const handleOther = (e: { target: any }) => {
  if (!activeEl.first && !activeEl.contains(e.target)) {
    activeRow.visible = false
  }
}
onMounted(() => {
  getCurrentInstance()
  //点击其他地方popover消失
  document.addEventListener('click', handleOther)
})
onUnmounted(() => {
  document.removeEventListener('click', handleOther)
})

//popove的长按
const emit = defineEmits(['handlePopoveTouch'])
const handlePopoveTouch = (row: any, el: Node) => {
  if (clientWidth.value < 992) {
    activeEl = el
    activeEl.first = false
    activeRow = row
    row.visible = true
  }
  emit('handlePopoveTouch', row, el)
}
</script>

<style scoped lang="scss"></style>
