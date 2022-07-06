import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/initialization.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementPlusIconsVue from '@element-plus/icons-vue'
createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .use(ElementPlusIconsVue)
  .use(Antd)
  .mount('#app')
