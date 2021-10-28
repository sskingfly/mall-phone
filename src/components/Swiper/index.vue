<template>
  <div>
    <van-swipe
      :autoplay="autoplay"
      indicator-color="white"
      class="my-swipe"
    >
      <van-swipe-item
        v-for="item in lunbolist"
        :key="item.id"
      >
        <img v-lazy="item.src||item.img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: {
    lunbolist: {},
    autoplay: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.my-swipe {
  height: 150px;
  text-align: center;
  img {
    width: 50%;
    height: 100%;
  }
}
</style>