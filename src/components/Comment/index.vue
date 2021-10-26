<template>
  <div class="comment">
    <van-field
      class="content"
      v-model="message"
      rows="1"
      autosize
      label="发表评论"
      type="textarea"
      placeholder="请输入评论"
    />
    <van-button
      type="primary"
      block
    >提交评论</van-button>

    <div
      class="comment-list"
      v-if="comments.length !==0"
    >
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
    <div v-else>
      暂无数据
    </div>
    <van-button
      type="primary"
      block
      @click="getMore"
      :disabled="disabled"
    >{{hasMore?'被掏空了': '加载更多'}}</van-button>
  </div>
</template>
<script>
import { getComments } from '@/api/news'
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
      disabled: false
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
      // console.log(this.hasMore)
    },
    getMore() {
      this.getComments()
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
}
</style>