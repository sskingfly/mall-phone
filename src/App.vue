<template>
  <div class="app">
    <!-- header -->
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="clickLeft"
    />
    <!-- main -->
    <router-view></router-view>
    <!-- footer -->
    <van-tabbar v-model="active">
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
        info="6"
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
      title: '首页',
      active: 0
    }
  },
  methods: {
    clickLeft() {
      console.log(this.$router)
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
