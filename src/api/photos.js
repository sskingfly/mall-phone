import request from '../utils/request'

export const getImageCategory = () => {
  return request({
    method: 'get',
    url: '/api/getimgcategory'
  })
}

export const getImages = id => {
  return request({
    method: 'get',
    url: '/api/getimages/' + id
  })
}


export const getImageInfo = id => {
  return request({
    method: 'get',
    url: '/api/getimageInfo/' + id
  })
}

export const getThumImages = id => {
  return request({
    method: 'get',
    url: '/api/getthumimages/' + id
  })
}















