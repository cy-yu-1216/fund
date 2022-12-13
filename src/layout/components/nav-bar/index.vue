<template>
  <div class="nav-bar">
    <!-- <div @click="handlePanel">
      <i class="el-icon-tools" />
      <el-icon v-if="panelStatus"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div> -->
    <el-scrollbar class="scroll">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        tab-position="top"
        @edit="handleTabsEdit"
        @tab-click="handleTabsClick"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        />
      </el-tabs>
    </el-scrollbar>
    <div class="bar-right">其他</div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { mainStore } from '@/store/main-store'
//改变展开收起
// let panelStatus = ref(mainStore.getPanelStatus)
let editableTabsValue = ref('1')
let editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])
const handleTabsEdit = (item: any) => {
  console.log(item.b)
  // return editableTabs
}
const handleTabsClick = (item: any) => {}
const handlePanel = () => {
  // const status = !mainStore.getPanelStatus
  // //设置当前所在页面面板状态
  // panelStatus.value = status
  // //设置缓存及store中设置面板
  // mainStore.setPanelStatus(status)
}
</script>

<style scoped lang="scss">
.nav-bar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  display: flex;
  .scroll {
    flex: 1;
  }
  .bar-right {
    width: 15%;
  }
}
</style>
