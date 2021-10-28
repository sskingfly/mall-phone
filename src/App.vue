<template>
  <div class="app">
    <!-- header -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="clickLeft"
      fixed
    />
    <!-- main -->
    <router-view></router-view>
    <!-- footer -->
    <van-tabbar
      v-model="active"
      v-if="$route.meta.isShow"
    >
      <van-tabbar-item
        icon="home-o"
        to="/home"
      ></van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        to="/friends"
      ></van-tabbar-item>
      <van-tabbar-item
        icon="cart-o"
        :badge="$store.getters['cart/getAllCount']"
        to="/cart"
      ></van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/search"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: this.$route.meta.title,
      active: 0
    }
  },
  watch: {
    '$route.meta.title'(newVal) {
      this.title = newVal
    }
  },
  methods: {
    clickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.app {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
