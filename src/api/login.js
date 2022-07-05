import request from '@/utils/request'
// 登录
const login = (username, password, code, token) => {
  return request({
    url: `/login?username=${username}&password=${password}&code=${code}&token=${token}`,
    method: 'POST'
  })
}
// 获取验证码
const captcha = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}

// 退出登录
const logout = () => {
  return request({
    url: '/logout',
    method: 'POST'
  })
}
// 获取用户信息
const getUserInfo = () => {
  return request({
    url: '/sys/userInfo'
  })
}
export default {
  login,
  captcha,
  logout,
  getUserInfo
}
