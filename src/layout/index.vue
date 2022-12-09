<template>
  <div class="app-wrapper">
    <header-bar />
    <div class="main-container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :key="(route.name as string)">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import headerBar from './header-bar.vue'
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  .main-container {
    height: calc(100% - 58px);
  }
}
</style>
