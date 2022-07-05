import request from '@/utils/request'
const getMenu = () => {
  return request({
    url: '/sys/menu/nav',
    method: 'POST'
  })
}

export default {
  getMenu
}
