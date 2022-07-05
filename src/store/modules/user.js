import login from '@/api/login'
import { setItem, getItem, removeItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
      console.log('存储成功')
    },
    removeToken() {
      setItem('token', '')
      removeItem('token')
    }
  },
  actions: {
    // async login({ commit }, payload) {},
    // 获取验证码
    async getCapture({ commit }) {
      const res = await login.captcha()
      return res
    }
  },
  getters: {}
}
