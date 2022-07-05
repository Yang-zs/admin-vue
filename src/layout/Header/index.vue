<template>
  <div class="header">
    <h3 class="title">VueAdmin后台管理系统</h3>
    <div class="header-left">
      <el-dropdown>
        <span class="el-dropdown-link">
          username
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goPersonal">个人中心</el-dropdown-item>
            <el-dropdown-item @click="LoginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import user from '../../api/login'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
// 进入个人中心
const goPersonal = () => {
  router.push('/userCenter')
}
const LoginOut = async () => {
  const { data } = await user.logout()
  console.log(data, '退出登录状态')
  if (data.msg !== '操作成功') return
  store.commit('user/removeToken')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #00b2a3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .title {
    width: 1100px;
    text-align: center;
    margin-right: 50px;
    font-weight: 600;
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
}
</style>
