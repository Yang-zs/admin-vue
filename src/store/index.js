import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import tags from './modules/tags'
export default createStore({
  getters,
  modules: {
    user,
    tags
  }
})
