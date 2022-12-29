<template>
  <div class="app-wrapper">
    <header-bar :nav-list="navList" />
    <div class="main-container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <!-- router-view的key的唯一性会导致“根据参数动态渲染路由”时无法复用组件。想要复用某组件，就保证router-view里按需赋予它该有的key -->
          <keep-alive :include="list">
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import headerBar from './header-bar.vue'
import { routes } from '@/router/index'
import { reactive, onMounted } from 'vue'
import { mainStore } from '@/store/main-store'
import type { RouteRecordRaw } from 'vue-router'
let navList: RouteRecordRaw[] = reactive([])
let list: any = []
const homeRouter = routes.find((res) => res.name == 'home')
if (homeRouter) {
  navList = homeRouter.children as RouteRecordRaw[]
  list = navList.map((res) => res.name)
}

onMounted(() => {
  window.onresize = () => {
    mainStore.setClientWidth(document.body.clientWidth)
  }
})
</script>

<style scoped lang="scss"></style>
