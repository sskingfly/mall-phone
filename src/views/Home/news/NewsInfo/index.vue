<template>
  <div class="news-info">
    <van-panel
      :title="newsinfo.zhaiyao"
      :status="'阅读'+newsinfo.click+'次'"
    >
      <div class="content">{{newsinfo.content}}</div>
    </van-panel>
    <Comment :id="id"></Comment>
  </div>
</template>
<script>
import { getNewsInfo } from '@/api/news'
import Comment from '@/components/Comment'
export default {
  props: ['id'],
  data() {
    return {
      newsinfo: {}
    }
  },
  methods: {
    async getNewsInfo() {
      const res = await getNewsInfo(this.id)
      this.newsinfo = res.data.message
    }
  },
  created() {
    this.getNewsInfo()
  },
  components: {
    Comment
  }
}
</script>
<style lang="scss" >
.news-info {
  padding: 0 10px;
  // box-sizing: border-box;
  .van-cell__title {
    font-size: 16px;
    font-weight: 600;
    flex: 2;
  }
  .content {
    text-indent: 2em;
  }
}
</style>
