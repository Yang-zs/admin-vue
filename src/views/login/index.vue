<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-img"></div>
      <div class="login-item">
        <!-- form -->
        <el-form
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
          label-width="120px"
          class="demo-loginForm"
          status-icon
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" />
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" />
          </el-form-item>

          <el-form-item label="" prop="code" class="pr">
            <el-input
              prop="code"
              v-model="loginForm.code"
              placeholder="验证码"
            ></el-input>
            <button class="code-btn">
              <!-- <span v-show="show">发送验证码</span> -->
              <span class="count" @click="clickCapture"
                ><img src="" alt="" /><img :src="imgCode" alt=""
              /></span>
            </button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >提交</el-button
            >
            <el-button>获取密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import login from '../../api/login'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()

// 返回来的验证内容
const imgCode = ref()
// 返回来的token
const teken = ref()
// 表单
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: ''
})
const store = useStore()
// 获取验证码
const clickCapture = async () => {
  store.dispatch('user/getCapture')
  const res = await store.dispatch('user/getCapture')
  imgCode.value = res.data.data.captchaImg
  teken.value = res.data.data.token
}
// 页面初始加载获取验证码
clickCapture()
// 登录
const submitForm = async (ruleFormRef) => {
  const { data } = await login.login(
    loginForm.username,
    loginForm.password,
    loginForm.code,
    teken.value
  )
  if (data.msg !== '操作成功') return
  router.push('/')
  getMenu()
  console.log(data, '登录')
}

const getMenu = async () => {
  console.log(213123)
  const { data } = await store.dispatch('user/getUserInfo')
  console.log(data, 'menus')
}
// 表单验证规则
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { max: 5, message: '长度 5 个字符', trigger: 'blur' }
  ]
})
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  position: relative;
  .login-box {
    width: 100%;
    height: 500px;
    position: absolute;
    top: 50%;
    margin-top: -250px;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-img {
      width: 360px;
      margin-right: 50px;
      height: 271px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url('../../../public/picture/iconss.png');
    }
    .login-item {
      width: 400px;
      height: 50px;
    }
  }
  .code-btn {
    border: 0;
    margin-top: 6px;
  }
}
</style>
