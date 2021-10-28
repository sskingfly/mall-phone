<template>
  <div class="goods-info">
    <Swiper
      class="my-panel"
      :lunbolist="lunbolist"
    ></Swiper>

    <van-panel
      class="my-panel"
      :title="goodsinfo.title"
    >
      <div class="content">
        <p class="price">
          <span class="new">现价：￥{{goodsinfo.sell_price}}</span>
          <span class="old">原价：￥{{goodsinfo.market_price}}</span>
        </p>
        <p class="number">
          <span>购买数量：</span>
          <van-stepper v-model="value" />
        </p>
        <p class="btn-group">
          <van-button
            type="primary"
            size="small"
            class="pay"
          >立即购买</van-button>
          <van-button
            type="danger"
            size="small"
            @click="addCart"
          >加入购物车</van-button>
        </p>
      </div>
    </van-panel>
    <van-panel
      class="my-panel"
      title="商品信息"
    >
      <div class="content">
        <p>商品货号:{{goodsinfo.goods_no}}</p>
        <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
        <p>上架时间:{{goodsinfo.add_time | datefmt}}</p>
      </div>
    </van-panel>

    <Comment :id="id"></Comment>
  </div>
</template>
<script>

import { getThumImages } from '@/api/photos'
import { getGoodsInfo } from '@/api/goods'
import Swiper from '@/components/Swiper'

import Comment from '@/components/Comment'
export default {
  props: ['id'],
  data() {
    return {
      lunbolist: [],
      goodsinfo: {},
      value: 1
    }
  },
  methods: {
    async getThumImages() {
      const res = await getThumImages(this.id)
      this.lunbolist = res.data.message
    },
    async getGoodsInfo() {
      const res = await getGoodsInfo(this.id)
      this.goodsinfo = res.data.message
    },
    addCart() {
      const goodsInfo = {
        id: this.id,
        title: this.goodsinfo.title,
        src: this.lunbolist[0].src,
        isShow: true,
        price: this.goodsinfo.sell_price,
        count: this.value,
        timer: null
      }
      this.$store.dispatch('cart/addCart', goodsInfo)
    }
  },
  created() {
    this.getThumImages()
    this.getGoodsInfo()
  },
  mounted() {

  },
  components: {
    Swiper,
    Comment
  }
}
</script>
<style lang="scss" >
.goods-info {
  padding: 10px;
  .my-swipe {
    height: 150px;
    text-align: center;
    img {
      width: 50%;
      height: 100%;
    }
  }

  .my-panel {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    .content {
      margin-left: 15px;
      font-size: 12px;
      .price {
        display: flex;
        .new {
          margin-right: 20px;
          color: red;
        }
        .old {
          text-decoration: line-through;
        }
      }
      .number {
        display: flex;
        align-items: center;
      }
      .btn-group {
        .pay {
          margin-right: 20px;
        }
      }
    }
    .van-cell__title {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>