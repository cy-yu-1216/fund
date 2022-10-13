<template>
  <div class="nav">
    <div>头部标识</div>
    <el-menu
      default-active="2"
      :collapse="isCollapse"
      class="menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-scrollbar height="100%">
        <side-bar-item :route-list="routeList" />
      </el-scrollbar>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import sideBarItem from './side-bar-item.vue'
import { routes } from '@/router/index'
import localCache from '@/utils/cache'
//折叠面板展开收起
let isCollapse = ref(localCache.getCache('panelStatus') ? true : false)
//打开面板
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
//关闭面板
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
//获取路由
const routeList: any[] = reactive([])
const homeRouter = routes.find((res) => res.name == 'home')
if (homeRouter) {
  routeList.push(...(homeRouter.children as any))
}
</script>

<style scoped lang="scss">
.nav {
  width: 200px;
  // background-color: aliceblue;
  height: 100%;
  & > div {
    height: 60px;
  }
  .menu {
    width: 100%;
    height: calc(100% - 60px);
  }
}
</style>
