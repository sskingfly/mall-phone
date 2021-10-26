import axios from 'axios'
// 设置根路径
// axios.defaults.baseURL = 'http://itfly.vip:8888'

const service = axios.create({
  baseURL: 'http://itfly.vip:8888',
  // timeout: 1000,
})


export default service