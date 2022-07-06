<template>
  <div class="tagsView">
    <ul>
      <li
        v-for="(item, index) in tagsView"
        :key="index"
        :class="$route.path === item.path ? 'bgc' : ''"
        @click="$router.push(item.path)"
      >
        {{ item.title }}
        <span class="bc" @click.stop="$store.commit('tags/delTag', index)"
          >x</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()

watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    const obj = {
      path: route.path,
      title: route.meta.title
    }
    store.commit('tags/addTag', obj)
  },
  { immediate: true, deep: true }
)
const tagsView = computed(() => {
  return store.getters.tags
})

console.log(router, '213')
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
