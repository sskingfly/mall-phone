import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: 'http://itfly.vip:8888'
  // timeout: 1000,
})

// 响应拦截
service.interceptors.response.use(response => {
  // console.log(response)
  return response
}, err => {
  Toast('请求失败')
  Promise.reject(err)
})

export default service