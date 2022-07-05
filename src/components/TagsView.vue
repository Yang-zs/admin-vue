<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in $store.getters.tags"
        :key="item.path"
        :class="$route.path === item.path ? 'bgc' : ''"
        @click="$router.push(item.path)"
      >
        {{ item.title }}
        <span
          v-show="$route.path !== item.path"
          @click.stop="$store.commit('tags/delTag', index)"
          ><close-circle-outlined
        /></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { CloseCircleOutlined } from '@ant-design/icons-vue'
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  padding-top: 2px;
  padding-left: 0;
  cursor: pointer;
}

li {
  border: 1px solid #ddd;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding: 0 5px;
  margin: 0 5px;
}

.bgc {
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(0, 0, 0, 0.85);
  color: #fff;
}
</style>
