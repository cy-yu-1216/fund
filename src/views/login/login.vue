<template>
  <div>1222ç32</div>
  <div>222</div>
  <el-button type="primary" @click="loginUser">主要按钮</el-button>
</template>
<script setup lang="ts">
import { login } from '@/netApi/login/login'
import localCache from '@/utils/cache'
const loginUser = async () => {
  let res = await login({ MaintainTaskId: 10652 })
  localCache.setCache('factorykey', '1678c688-1989-4317-b407-8e8e10080e48')
}
</script>
<style scoped></style>
