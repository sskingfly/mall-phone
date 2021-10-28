<template>
  <div class="comment">
    <van-field
      class="content"
      v-model="message"
      rows="1"
      autosize
      label="发表评论"
      type="textarea"
      placeholder="请输入bb的内容"
      autofocus
      ref="fieldRef"
    />
    <van-button
      type="primary"
      block
      @click="postComments"
    >提交评论</van-button>

    <div class="comment-list">
      <van-card
        v-for="(item,index) in comments"
        :key="index"
        :desc="item.content"
      >
        <template #thumb>
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          <div>{{item.user_name}}</div>
        </template>
        <template #title>
          <van-rate
            v-model="value"
            readonly
          />
        </template>
        <template #price>
          {{item.add_time}}
        </template>
      </van-card>
    </div>
    <van-loading
      type="circular"
      v-if="isLoading"
      class="more"
    >
      加载中...
    </van-loading>
    <div
      v-else
      @click="getMore"
      class="more"
    >
      {{hasMore?'被掏空了': '加载更多'}}
    </div>
  </div>
</template>
<script>
import { getComments, postComments } from '@/api/news'
export default {
  props: ['id'],
  data() {
    return {
      message: '',
      value: 5,
      comments: [],
      pageNo: 0,
      pageSize: 3,
      hasMore: false,
      disabled: false,
      isLoading: false
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    async getComments() {
      if (this.hasMore !== false) {
        this.disabled = true
        return
      }
      ++this.pageNo
      const res = await getComments({ id: this.id, pageNo: this.pageNo, pageSize: this.pageSize })
      this.comments = this.comments.concat(res.data.message)
      // 计算临界点
      this.hasMore = this.pageNo * this.pageSize > res.data.count
    },
    getMore() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.getComments()
      }, 1000)
    },
    async postComments() {
      if (this.message) {
        await postComments({ id: this.id, content: this.message })
        this.comments.unshift({
          user_name: '匿名用户',
          add_time: new Date().getTime(),
          content: this.message,
          rate: 5
        })

        this.message = ' '
        // this.$refs.fieldRef.focus()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.comment {
  .content {
    margin: 10px 0;
    border: 1px solid #ddd;
    padding: 10px 16px;
    height: 60px;
  }
  .comment-list {
    margin-top: 10px;
    .van-icon {
      font-size: 50px;
    }
    .van-card__desc {
      margin-top: 15px;
    }
  }
  .more {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
}
</style>