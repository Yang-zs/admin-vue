<template>
  <el-menu
    router
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <MenuItem></MenuItem>
  </el-menu>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
