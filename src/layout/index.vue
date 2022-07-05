<template>
  <el-container class="container">
    <Aside></Aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from './Aside/index.vue'
import Header from './Header/index.vue'
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    margin: 0;
    padding: 0;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    overflow: auto;
    height: 100%;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }

  body > .el-container {
    height: 100%;
  }
}
</style>
