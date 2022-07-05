import { getItem, setItem } from '@/utils/storage'
import { getUserInfo } from '@/api/login'
import router from '@/router'

import { getMenuList } from '@/api/menus'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || null,
    userInfo: {},
    menus: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    },
    setUserInfo(state, info) {
      state.userInfo = info
    },
    logout(state) {
      state.token = ''
      state.userInfo = {}
      setItem('token', '')
      router.push('/login')
    },
    setMenu(state, payload) {
      state.menus = payload
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      const navs = await getMenuList()
      console.log(navs)
      commit('setUserInfo', res)
      commit('setMenu', navs)
      return navs
    }
  }
}
