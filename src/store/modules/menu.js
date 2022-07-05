import menus from '../../api/menus'
export default {
  namespaced: true,
  state: () => ({
    menuList: []
  }),
  mutations: {},
  actions: {
    // 获取侧边导航信息
    async getMenuList({ commit }) {
      const response = await menus.getMenu()
      console.log(response)
    }
  }
}
