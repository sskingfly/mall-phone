import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Friends from '../views/Friends'
import Search from '../views/Search'
import Cart from '../views/Cart'
import NewsList from '../views/Home/news/NewsList'
import NewsInfo from '../views/Home/news/NewsInfo'
import PhotoList from '../views/Home/photos/PhotoList'
import PhotoInfo from '../views/Home/photos/PhotoInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      isShow: true
    }
  },
  {
    path: '/home/newslist',
    component: NewsList,
    meta: {
      title: '新闻列表',
      isShow: false
    }
  },
  {
    path: '/home/newsinfo/:id',
    component: NewsInfo,
    meta: {
      title: '新闻详情',
      isShow: false
    },
    // 把id通过父传子的方式传递给  newsinfo 组件
    props: true
  },
  {
    path: '/home/photolist',
    component: PhotoList,
    meta: {
      title: '图片列表',
      isShow: false
    }
  },
  {
    path: '/home/photoinfo/:id',
    component: PhotoInfo,
    meta: {
      title: '图片详情',
      isShow: false
    },
    props: true
  },
  {
    path: '/friends',
    component: Friends,
    meta: {
      title: '会员',
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      title: '搜索',
      isShow: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车',
      isShow: true
    }
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
