import login from '@/api/login'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {},
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
