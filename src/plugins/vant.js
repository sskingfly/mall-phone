import Vue from 'vue'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'


// / 相当于绝对路径public
Vue.use(Lazyload, {
  // loading: '/loading.gif'
  // loading: require('../assets/loading.gif')
  // loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb779f7241e59aebabb25b7e68bde3669be1e8e91128e8d-5echD1_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637891018&t=7dd7a3882f61c8d26c4ccbc1f588723f'
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0dbd39dd274025f21e0a4016cfcb32653b24536a364f-9jIt3B_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637974552&t=8efe9a716f40a9f229d733de405b1966'
})

Vue.use(Vant)
