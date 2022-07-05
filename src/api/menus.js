import request from '@/utils/request'
export const getMenuList = () => {
  return request({
    url: '/sys/menu/nav'
  })
}
