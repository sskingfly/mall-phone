import request from '../utils/request'

export const getGoods = ({ page, limit }) => {
  return request({
    method: 'get',
    // eslint-disable-next-line quotes
    url: `/api/getgoods?pageindex=${page}&limit=${limit}`
  })
}

export const getGoodsInfo = id => {
  return request({
    method: 'get',
    url: '/api/goods/getinfo/' + id
  })
}






