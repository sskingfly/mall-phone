<template>
  <div class="cart">
    <div class="cart-list">
      <div
        class="cart-list-item"
        v-for="item in $store.state.cart.cart"
        :key="item.id"
      >
        <div class="cart-l center">
          <van-switch v-model="item.isShow" />
        </div>
        <van-card
          class="cart-c center"
          :price="item.price+'.00'"
          :title="item.title"
          :thumb="item.src"
        />
        <div class="cart-r center">
          <van-stepper
            v-model="item.count"
            theme="round"
          />
        </div>
      </div>
    </div>
    <van-submit-bar
      :price="getAllPrice*100"
      button-text="提交订单"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    // ...mapState({
    //   cart: 'cart/cart'
    // }),
    ...mapGetters({
      getAllPrice: 'cart/getAllPrice'
    })
  }
}
</script>
<style lang="scss" scoped>
.cart {
  padding: 10px;
  .cart-list {
    .cart-list-item {
      display: flex;
      align-items: center;
      border: 1px solid #eee;
      padding: 6px;
      box-sizing: border-box;
      margin-bottom: 10px;
      .van-card {
        background-color: #fff;
      }
      .center {
        display: flex;
        justify-content: center;
      }
      .cart-l {
        flex: 1;
      }
      .cart-c {
        flex: 2;
        .van-card__price-integer {
          font-size: 12px;
        }
      }
      .cart-r {
        flex: 2;
      }
    }
  }
}
</style>