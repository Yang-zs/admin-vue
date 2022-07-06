<template>
  <el-menu-item index="/">
    <el-icon><icon-menu /></el-icon>
    <span>首页</span>
  </el-menu-item>

  <el-sub-menu v-for="item in menuList" :key="item.id" :index="item.name">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ item.title }}</span>
    </template>
    <el-menu-item
      v-for="ite in item.children"
      :key="ite.id"
      :index="ite.path"
      >{{ ite.title }}</el-menu-item
    >
  </el-sub-menu>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
console.log(store.getters.menus)
const menuList = reactive(store.getters.menus)
console.log(menuList, '21')
</script>

<style lang="scss" scoped></style>
