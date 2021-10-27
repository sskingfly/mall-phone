<template>
  <div class="photo-info">
    <van-panel
      :title="photoInfo.title"
      :status="'阅读'+photoInfo.click+'次'"
    >
      <div class="img-box">
        <img
          v-for="(item,index) in thumImages"
          :key="item.id"
          :src="item.src"
          @click="imagePreview(index)"
        >
      </div>
      <div class="content">{{photoInfo.content}}</div>
    </van-panel>
    <Comment :id="id"></Comment>
  </div>
</template>
<script>
import { getImageInfo, getThumImages } from '@/api/photos'
import { ImagePreview } from 'vant'
import Comment from '@/components/Comment'
export default {
  props: ['id'],
  data() {
    return {
      photoInfo: {},
      thumImages: []
    }
  },
  methods: {
    async getImageInfo() {
      const res = await getImageInfo(this.id)
      this.photoInfo = res.data.message
    },

    async getThumImages() {
      const res = await getThumImages(this.id)
      this.thumImages = res.data.message
    },
    imagePreview(startPosition) {
      const images = []
      this.thumImages.forEach(item => {
        images.push(item.src)
      })
      ImagePreview({
        images,
        startPosition
      })
    }
  },
  created() {
    this.getImageInfo()
    this.getThumImages()
  },
  components: {
    Comment
  }
}
</script>
<style lang="scss" scoped>
.photo-info {
  padding: 0 10px;
  .van-cell__title {
    font-size: 16px;
    font-weight: 600;
    flex: 2;
  }
  .content {
    text-indent: 2em;
  }
  .img-box {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>