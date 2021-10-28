<template>
  <div class="photo-list">
    <!-- <van-tabs animated> -->
    <van-tabs>
      <van-tab
        v-for="cate in cates"
        :key="cate.id"
      >
        <template #title>
          <span @click="getImages(cate.id)">
            {{cate.title}}
          </span>
        </template>
        <div
          class="image-list"
          v-if="images.length > 0"
        >
          <img
            v-for="image in images"
            :key="image.id"
            v-lazy="image.img_url"
            @click="goDetail('/home/photoinfo',image.id)"
          >
        </div>
        <div v-else>
          暂无数据
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getImageCategory, getImages } from '@/api/photos'
// import mixins from '@/mixins'
export default {
  // mixins: [mixins],
  data() {
    return {
      cates: [],
      images: []
    }
  },
  methods: {
    async getImageCategory() {
      const res = await getImageCategory()
      res.data.message.unshift({
        id: 0,
        title: '全部'
      })
      this.cates = res.data.message
    },
    async getImages(id) {
      const res = await getImages(id)
      this.images = res.data.message
    }
  },
  created() {
    this.getImageCategory()
    // 默认显示全部
    this.getImages(0)
  }
}
</script>
<style lang="scss" scoped>
.photo-list {
  padding: 10px;
  .image-list {
    img {
      width: 100%;
      padding: 4px;
      box-sizing: border-box;
    }
  }
}
</style>