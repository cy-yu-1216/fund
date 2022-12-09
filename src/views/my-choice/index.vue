<template>
  <div class="container">
    <div class="top">
      <el-input v-model="searchValue" placeholder="请输入内容">
        <template #suffix>
          <icon-svg iconName="sousuo" @click="handleSearch" />
        </template>
      </el-input>
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const searchValue = ref('')

const handleSearch = () => {}
</script>

<style scoped lang="scss"></style>
