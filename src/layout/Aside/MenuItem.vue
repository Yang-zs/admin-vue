<template>
  <el-menu-item index="/">
    <el-icon><icon-menu /></el-icon>
    <span>首页</span>
  </el-menu-item>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><location /></el-icon>
      <span>系统管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/userList">用户管理</el-menu-item>

      <el-menu-item index="/roleList">角色管理</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <el-menu-item index="/menuList">菜单管理</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group></el-menu-item-group>
  </el-sub-menu>
  <el-sub-menu index="1-4">
    <template #title>
      <el-icon><location /></el-icon>
      <span>系统工具</span>
    </template>
    <el-menu-item index="/dictList">数字字典</el-menu-item>
  </el-sub-menu>
</template>

<script setup>
// import { reactive } from 'vue'
// import { getItem } from '../../utils/storage'
// const menuList = reactive([getItem('menus')])
</script>

<style lang="scss" scoped></style>
