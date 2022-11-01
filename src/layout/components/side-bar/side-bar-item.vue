<template>
  <template v-for="item in routeList">
    <!-- 包含多级菜单的，递归展示 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length"
    >
      <template #title>
        <!-- <el-icon><location /></el-icon> -->
        <span>{{ item.meta?.title }}</span>
      </template>
      <el-menu-item-group>
        <side-bar-item :route-list="item.children" />
      </el-menu-item-group>
    </el-sub-menu>
    <!-- 叶子路由 -->
    <router-link :to="item.path">
      <el-menu-item
        :index="item.path"
        v-if="!item.children || !item.children.length"
      >
        <!-- <el-icon><location /></el-icon> -->
        <span>{{ item.meta?.title }}</span></el-menu-item
      ></router-link
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
