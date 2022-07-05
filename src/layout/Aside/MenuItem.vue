<template>
  <!-- 没有children用这个 -->

  <el-menu-item index="">
    <el-icon></el-icon>
    <span>222</span>
  </el-menu-item>

  <!-- 有children用这个 -->
  <el-sub-menu index="">
    <template #title>
      <el-icon><location /></el-icon>
      <span>22</span>
    </template>
    <el-menu-item index="">22</el-menu-item>
  </el-sub-menu>
</template>

<script setup>
import { reactive } from 'vue'
import { getItem } from '../../utils/storage'
const menuList = reactive([getItem('menus')])
console.log(menuList, '21312')
</script>

<style lang="scss" scoped></style>
