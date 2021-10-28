const state = {
  count: 6,
  cart: JSON.parse(localStorage.cart || '[]')
}

const mutations = {
  ADD_CART(state, payload) {
    let flag = false
    // 如果商品已经存在只做数量上的修改
    state.cart.forEach(item => {
      if (item.id === payload.id) {
        item.count += payload.count
        flag = true
      }
    })
    // 如果商品不存在，添加商品
    if (!flag) {
      state.cart.push(payload)
    }
    // 把商品添加到本地存储
    localStorage.cart = JSON.stringify(state.cart)
  }
}

const actions = {
  addCart({ commit }, obj) {
    commit('ADD_CART', obj)
  }
}

const getters = {
  getAllCount(state) {
    let c = 0
    state.cart.forEach(item => {
      c += item.count
    })
    return c
  },
  getAllPrice(state) {
    let o = 0
    state.cart.forEach(item => {
      if (item.isShow) {
        o += item.count * item.price
      }
    })

    return o
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}