// export default {
//   created() {
//     console.log('mixins created')
//   },
//   methods: {
//     goDetail(url, id) {
//       this.$router.push(url + '/' + id)
//     }
//   }
// }

import Vue from 'vue'

// 全局混入 容易变量 重复
Vue.mixin({
  methods: {
    goDetail(url, id) {
      this.$router.push(url + '/' + id)
    }
  }
})
