<template>
  <div class="main flex-col-center">
    <div class="content">
      <div class="login-title flex-row-center">FUND</div>
      <el-form
        ref="formRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model.trim="ruleForm.username"
            autocomplete="off"
            placeholder="请输入用户名"
          >
            <template #prepend>
              <icon-svg iconName="yonghuming" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="ruleForm.password"
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
          >
            <template #prepend> <icon-svg iconName="ziyuanxhdpi" /> </template
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <div class="flex-row-end register" @click="register">
          <span>注册用户</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userMsgStore } from '@/store/user-msg-store'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'

/***************表单相关******************/
const formRef = ref<FormInstance>()
const ruleForm = reactive<LoginType>({
  username: '',
  password: ''
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }]
})

/**************登录****************/
const user = userMsgStore()
const router = useRouter()
const submitForm = async () => {
  if (!formRef.value) {
    return
  }
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        await user.loginUser(ruleForm)
        //登录成功
        router.push('/home')
        ElMessage.success('登录成功')
      } catch (error: any) {
        ElMessage.warning(error.message)
      }
    } else {
      return false
    }
  })
}

//注册
const register = () => {
  router.push('/register')
}
</script>
<style lang="scss" scoped>
.main {
  .content {
    padding: 15px 25px 25px;
    width: 350px;
    border-radius: 4px;
    border: 1px solid #dddfe5;
    .login-title {
      padding: 0 10px 10px;
      font-size: 28px;
      font-weight: 800;
    }
    s .ruleForm {
      width: 100%;
      box-sizing: border-box;
    }
    .btn {
      width: 100%;
      ::v-deep .el-buttons {
        width: 100%;
      }
      .register {
        color: #589ef8;
        padding-right: 4px;
        cursor: pointer;
      }
    }
  }

  .el-form-item {
    margin-bottom: 28px;
  }
  .el-input {
    margin-bottom: 3px;
  }
  ::v-deep .el-form-item .el-input {
    height: 42px !important;
    line-height: 42px !important;
  }
  .el-button {
    width: 100%;
    height: 42px;
    margin-bottom: 10px;
  }
}
</style>
