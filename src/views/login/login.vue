<template>
  <div>1222ç32</div>
  <div>222</div>
  <el-button type="primary" @click="loginUser">主要按钮</el-button>
  <!-- <el-button type="primary" @click="watchSave">按钮</el-button> -->
</template>
<script setup lang="ts">
import { userMsgStore } from '@/store/user-msg-store'
import { useRouter } from 'vue-router'
// import { ElMessage } from 'element-plus'
const user = userMsgStore()
const router = useRouter()
const loginUser = () => {
  user.loginUser('buludu', '1q2w32!').then((res) => {
    if (res) {
      //登录成功
      router.push('/home')
    }
  })
}
// const watchSave = async () => {
//   try {
//     let res = await save({ fundCode: '005827' })
//     console.log(res)
//   } catch (error) {
//     // ;(inject('$message') as any).warning(
//     //   (error as ResponseDataType).message || '请求失败'
//     // )
//   }
// }
</script>
<style scoped></style>
