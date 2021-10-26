import request from '../utils/request'

export const getNewsList = () => {
  return request({
    method: 'get',
    url: '/api/getnewslist'
  })
}
export const getNewsInfo = id => {
  return request({
    method: 'get',
    url: '/api/getnew/' + id
  })
}


export const getComments = ({ id, pageNo, pageSize }) => {
  return request({
    method: 'get',
    // eslint-disable-next-line quotes
    url: `/api/getcomments/${id}?pageindex=${pageNo}&limit=${pageSize}`
  })
}
export const postComments = ({ id, content }) => {
  return request({
    method: 'post',
    url: '/api/postcomment/' + id,
    data: {
      content
    }
  })
}







