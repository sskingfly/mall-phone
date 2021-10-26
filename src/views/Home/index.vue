<template>
  <div class="home">
    <!-- swipe -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="item in lunbolist"
        :key="item.id"
      >
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>

    <!-- grid -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="grid in grids"
        :key="grid.id"
        :icon="grid.src"
        :text="grid.title"
        :to="grid.to"
      />
    </van-grid>
  </div>
</template>
<script>
import { getLunbo, getGrids } from '../../api/home'
export default {
  data() {
    return {
      lunbolist: [],
      grids: []
    }
  },
  created() {
    this.getLunbo()
    this.getGrids()
  },
  methods: {
    async getLunbo() {
      const res = await getLunbo()
      this.lunbolist = res.data.message
    },
    async getGrids() {
      const res = await getGrids()
      this.grids = res.data.message
    }
  }
}
</script>

<style lang="scss" >
// lang 使用指定的预编译语言
// scoped 限制样式只能在当前组件使用
.home {
  .my-swipe {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .van-grid-item__icon {
    font-size: 60px;
  }
}
</style>
