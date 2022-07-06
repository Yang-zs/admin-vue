const getters = {
  token: (state) => state.user.token,
  hasuserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) === '{}'
  },
  userInfo: (state) => state.user.userInfo,
  tags: (state) => state.tags.tagsArray,
  menus: (state) => state.user.menus
}

export default getters
