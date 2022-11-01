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
        <div class="row">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model.trim="ruleForm.username"
              placeholder="请输入"
              clearable
              maxlength="10"
              @blur="blurUsername"
            />
          </el-form-item>
          <el-form-item label="昵称" prop="nickname">
            <el-input
              v-model.trim="ruleForm.nickname"
              placeholder="请输入"
              clearable
              maxlength="10"
            />
          </el-form-item>
        </div>
        <div class="row">
          <el-form-item label="密码" prop="password">
            <el-input
              v-model.trim="ruleForm.password"
              type="password"
              placeholder="请输入"
              clearable
              maxlength="16"
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              v-model.trim="ruleForm.confirmPassword"
              type="password"
              placeholder="请输入"
              clearable
              maxlength="16"
            />
          </el-form-item>
        </div>
        <div class="row">
          <el-form-item label="手机号" prop="phone">
            <el-input
              v-model.trim="ruleForm.phone"
              clearable
              placeholder="请输入"
            />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model.trim="ruleForm.email"
              placeholder="请输入"
              clearable
            />
          </el-form-item>
        </div>
        <div class="row">
          <el-form-item label="性别" prop="gender">
            <el-select v-model="ruleForm.gender" placeholder="请选择" clearable>
              <el-option
                v-for="item in sexOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="生日" prop="birthday">
            <el-date-picker
              v-model="ruleForm.birthday"
              type="date"
              placeholder="请选择"
              clearable
              value-format="YYYY-MM-DD"
            />
          </el-form-item>
        </div>
        <div class="row">
          <el-form-item label="所在城市" prop="city">
            <!-- <el-input
              v-model.trim="ruleForm.city"
              maxlength="20"
              clearable
            /> -->
            <el-cascader
              v-model="ruleForm.cityValue"
              :options="cities"
              :props="{ expandTrigger: 'hover' }"
              placeholder="请输入"
              clearable
              @change="handleChange"
            />
          </el-form-item>
          <el-form-item label="工作" prop="job">
            <el-input
              v-model.trim="ruleForm.job"
              placeholder="请输入"
              maxlength="20"
              clearable
            />
          </el-form-item>
        </div>
      </el-form>
      <div class="btn">
        <el-button type="primary" @click="submitForm()">注册</el-button>
        <div class="flex-row-end register" @click="back">
          <span>返回</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { register } from '@/api/common'
import { sexOption } from '@/enum/sex-enum'
import { cities } from './city'
const router = useRouter()
//form相关
const formRef = ref<FormInstance>()
const ruleForm = reactive<RegisterType>({
  username: '',
  password: '',
  nickname: '',
  phone: '',
  email: '',
  icon: '',
  gender: null, //1男 2女 0未知
  birthday: '',
  city: '',
  job: '',
  sourceType: 1, //默认传1，用户来源：0-手动添加，1-自主注册，
  userLevel: 0, //等级 默认0
  growth: 0, //成长值 默认0
  confirmPassword: '',
  cityValue: []
})
//****************校验规则********************
const validatePhone = (rule: any, value: any, callback: any) => {
  if (
    !value.match(
      /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/
    )
  ) {
    callback(new Error('手机号格式错误'))
  }
  callback()
}
//校验邮箱格式
const validateEmail = (rule: any, value: any, callback: any) => {
  if (!value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
    callback(new Error('邮箱格式错误'))
  }
  callback()
}
//密码校验
const validatePassword = (rule: any, value: any, callback: any) => {
  if (!formRef.value) return
  formRef.value.validateField('confirmPassword', () => null)
  callback()
}
//确认密码校验
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value !== ruleForm.password) {
    callback(new Error('密码不一致'))
  }
  callback()
}
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  nickname: [{ required: true, message: '请输入昵称', trigger: 'change' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: validatePassword, trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { validator: validateConfirmPassword, trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { validator: validateEmail, trigger: 'blur' }
  ]
})

/**********输入框的操作***********/
//用户名失去焦点  如果昵称没有则默认为用户名
const blurUsername = () => {
  if (!ruleForm.nickname) {
    ruleForm.nickname = ruleForm.username
  }
}
//改变城市选择
const handleChange = () => {}

//注册
const submitForm = async () => {
  if (!formRef.value) {
    return
  }
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        if (!ruleForm.gender) {
          ruleForm.gender = 0
        }
        await register(ruleForm)
        ElMessage.success('注册成功')
        //注册成功
        router.push('/login')
      } catch (error: any) {
        //防止报错时候gender变为0 未知
        if (!ruleForm.gender) {
          ruleForm.gender = null
        }
        ElMessage.warning(error.message)
      }
    } else {
      return false
    }
  })
}

//返回登录
const back = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.main {
  .content {
    padding: 15px 25px 25px;
    width: 600px;
    border-radius: 4px;
    border: 1px solid #dddfe5;
    .login-title {
      padding: 0 10px 10px;
      font-size: 28px;
      font-weight: 800;
    }
    .ruleForm {
      width: 100%;
      box-sizing: border-box;
    }
    .btn {
      margin-top: 8px;
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

  .el-button {
    width: 100%;
    height: 42px;
    margin-bottom: 10px;
  }
}
</style>
