<template>
  <div class="home-content">
    <div class="blog-card">
      <el-carousel indicator-position="outside" height="250px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="img[item - 1]" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="article-content">
      <article-recommendation></article-recommendation>
      <article-recommendation></article-recommendation>
      <article-recommendation></article-recommendation>
      <article-recommendation></article-recommendation>
      <article-recommendation></article-recommendation>
    </div>
  </div>
</template>
<script>
import img1 from "../../assets/blog-lunbo1.jpg";
import img2 from "../../assets/blog-lunbo2.jpg";
import img3 from "../../assets/blog-lunbo3.jpg";
import articleRecommendation from "./Article.vue";
export default {
  data() {
    return {
      img: [img1, img2, img3]
    };
  },
  components: {
    articleRecommendation
  }
};
</script>
<style lang="scss" scoped>
.home-content {
  width: 100%;
  .blog-card {
    width: 100%;
    height: 100px;
    margin-top: 60px;
  }
  .article-content {
    width: 100%;
    margin-top: 175px;
    background: #fff;
    border-radius:10px;
    box-sizing:border-box ;
    padding: 10px;
  }
}
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
}
</style>