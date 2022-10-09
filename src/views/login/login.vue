<template>
  <div>1222ç32</div>
  <div>222</div>
  <el-button type="primary" @click="loginUser">主要按钮</el-button>
  <el-button type="primary" @click="watchSave">按钮</el-button>
</template>
<script setup lang="ts">
import { login } from '@/netApi/common'
import { save } from '@/netApi/watch/'
import localCache from '@/utils/cache'
// import { ElMessage } from 'element-plus'

const loginUser = async () => {
  try {
    let res = await login({ username: 'buludu', password: '1q2w32!' })
    //存储token
    localCache.setCache('token', res.token)
  } catch (error) {
    // ;(inject('$message') as any).warning(
    //   (error as ResponseDataType).message || '请求失败'
    // )
  }
}
const watchSave = async () => {
  try {
    let res = await save({ fundCode: '005827' })
    console.log(res)
  } catch (error) {
    // ;(inject('$message') as any).warning(
    //   (error as ResponseDataType).message || '请求失败'
    // )
  }
}
</script>
<style scoped></style>
