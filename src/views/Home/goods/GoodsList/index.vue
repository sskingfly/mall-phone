<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="goods-list"
      offset="0"
    >
      <div
        class="goods-list-item"
        v-for="(good,index) in goods"
        :key="index"
        @click="goDetail('/home/goodsinfo',good.id)"
      >
        <div class="img-box">
          <img v-lazy="good.img_url">
        </div>
        <h2 class="title">
          {{good.title}}
        </h2>
        <div class="info">
          <p class="price">
            <span
              class="new"
              v-price="'现价:￥'"
            >{{good.sell_price}}</span>
            <span
              class="old"
              v-price="'原价:￥'"
            >{{good.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余{{good.stock_quantity}}件</span>
          </p>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { getGoods } from '@/api/goods'
// import mixins from '@/mixins'
export default {
  // mixins: [mixins],
  data() {
    return {
      page: 0,
      limit: 6,
      goods: [],
      loading: false,
      finished: false,
      count: 0
    }
  },
  methods: {
    async getGoods() {
      ++this.page
      const res = await getGoods({ page: this.page, limit: this.limit })
      this.goods = this.goods.concat(res.data.message)
      this.count = res.data.count
    },
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(async () => {
        await this.getGoods()

        // 加载状态结束
        this.loading = false

        console.log(this.count)
        // 数据全部加载完成
        if (this.goods.length >= this.count) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>
<style lang="scss">
.goods-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-list-item {
    width: 48%;
    border: 1px solid #ddd;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    .img-box {
      width: 149px;
      height: 149px;
      img {
        width: 100%;
      }
    }
    .title {
      font-size: 16px;
    }
    .info {
      font-size: 12px;
      .price {
        display: flex;
        justify-content: space-between;
        .new {
          color: red;
        }
        .old {
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .van-list__error-text,
  .van-list__finished-text,
  .van-list__loading {
    width: 100%;
  }
}
</style>