import axios from 'axios'
import loading from './loading'
import store from '@/store'
// import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 10000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    loading.open()

    // if (token) config.headers.Authorization = token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    loading.close()
    // 对响应数据做点什么
    // const token = store.getters.token
    console.log(store.getters.token, 666)
    // _showError(response)
    console.log(response, '响应拦截')
    // if (response.headers.authorization)
    //   store.commit('user/setToken', response.headers.authorization)
    return response
  },
  function (error) {
    loading.close()
    // 对响应错误做点什么
    // _showError(error)
    return Promise.reject(error)
  }
)

// 响应提示信息
// const _showError = (message) => {
//   const info = message || '发生未知错误'
//   ElMessage.error(info)
// }

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
