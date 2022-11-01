<template>
  <div class="nav">
    <div>FUND</div>
    <el-menu
      :default-active="$route.path"
      class="menu"
      active-text-color="#409EFF"
    >
      <el-scrollbar height="100%">
        <side-bar-item :route-list="routeList" />
      </el-scrollbar>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import sideBarItem from './side-bar-item.vue'
import { routes } from '@/router/index'
import { appMainStore } from '@/store/app'
//折叠面板展开收起
// let isCollapse = ref(localCache.getCache('panelStatus') ? true : false)
const status = computed(() => appMainStore().getPanelStatus)
const isCollapse = computed(() => !status.value)
//获取路由
const routeList: any[] = reactive([])
const homeRouter = routes.find((res) => res.name == 'home')
if (homeRouter) {
  routeList.push(...(homeRouter.children as any))
}
</script>

<style scoped lang="scss">
.nav {
  height: 100%;
  width: 150px;
  & > div {
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
  }
  .menu {
    height: calc(100% - 60px);
  }
}
</style>
