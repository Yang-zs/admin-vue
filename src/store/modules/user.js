import login from '@/api/login'

import { getMenuList } from '@/api/menus'
import router from '@/router'
import { setItem, getItem, removeItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {},
    menus: getItem('menus') || []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, info) {
      state.userInfo = info
      setItem('userInfo', info)
    },
    removeToken() {
      setItem('token', '')
      removeItem('token')
    },
    setMenu(state, payload) {
      state.menus = payload
      setItem('menus', payload)
    },
    logout(state) {
      state.token = ''
      state.userInfo = {}
      setItem('token', '')
      router.push('/login')
    }
  },
  actions: {
    // async login({ commit }, payload) {},
    // 获取验证码
    async getCapture({ commit }) {
      const res = await login.captcha()
      return res
    },
    async getUserInfo({ commit }) {
      const res = await login.getUserInfo()
      const menus = await getMenuList()
      console.log(menus, '111')
      commit('setUserInfo', res)
      commit('setMenu', menus.data.data.nav)
      return menus
    }
  },
  getters: {}
}
