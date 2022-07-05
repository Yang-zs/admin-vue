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

export default {
  login,
  captcha
}
