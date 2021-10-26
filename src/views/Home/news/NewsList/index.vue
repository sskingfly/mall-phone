<template>
  <div class="news-list">
    <van-card
      v-for="item in newslist"
      :key="item.id"
      :title="item.title"
      :thumb="item.img_url"
      :thumb-link="'#/home/newsinfo/'+item.id"
    >
      <template #bottom>
        <div class="btn-group">
          <span class="add-time">{{item.add_time}}</span>
          <span>点击{{item.click}}次</span>
        </div>
      </template>
    </van-card>
  </div>
</template>
<script>
// @ 相当于 绝对路径src
import { getNewsList } from '@/api/news'
export default {
  data() {
    return {
      newslist: []
    }
  },
  methods: {
    async getNewsList() {
      const res = await getNewsList()
      this.newslist = res.data.message
    }
  },
  created() {
    this.getNewsList()
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  .van-card__content {
    min-height: 55px;
  }
  .van-card__thumb {
    height: 55px;
  }

  .van-card__title {
    // overflow: hidden;
    // text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
    .add-time {
      font-size: 12px;
      color: red;
    }
  }
}
</style>
