<template>
  <template v-for="item in routeList">
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length"
    >
      <template #title>
        <span>{{ item.meta?.title }}</span>
      </template>
      <el-menu-item-group>
        <side-bar-item :route-list="item.children" />
      </el-menu-item-group>
    </el-sub-menu>
    <!-- <router-link> -->
    <el-menu-item :index="item.path" v-else
      ><span>{{ item.meta?.title }}</span></el-menu-item
    >
  </template>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
const props = defineProps({
  routeList: {
    type: Array<RouteRecordRaw>,
    default: []
  }
})
toRefs(props)
</script>

<style scoped lang="scss"></style>
