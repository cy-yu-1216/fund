<template>
  <div class="app-wrapper">
    <side-bar />
    <div class="main-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>
<script setup lang="ts">
import sideBar from './side-bar/index.vue'
import navBar from './nav-bar/index.vue'
import appMain from './app-main/index.vue'
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
