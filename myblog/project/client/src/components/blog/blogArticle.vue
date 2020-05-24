<template>
  <div class="blogArticle">
    <div class="title">多风格自适应WordPress主题Puock正式发售，限时7折!</div>
    <div class="info">
      <span class="type">技术分享</span>
      <span class="view">
        <i class="el-icon-view"></i>
        27.2万
      </span>
      <span class="like">
        <i class="el-icon-collection-tag"></i>
        3213
      </span>
      <span class="reply">
        <i class="el-icon-chat-dot-round"></i>
        12312
      </span>
    </div>
    <div class="content">
      <p>在之前的文章中有提及到从年初开始，博主就在计划开发一款WordPress主题“Puock”，如今第一个版本的功能都已经完善，目前博主正在进行自用，所以从即日起，Puock主题正式进行发售。</p>
      <p>
        原价：320元，现价预售7折只需要224元。
        7折折扣码（有效期至2020-06-30）：5ccf66efa2a8a51f4d30
        授权范围：可授权两个域名，不区分根域名与二级域名。
        适用环境：PHP7+，WordPress 4.5+
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.blogArticle {
  width: 100%;
  padding: 10px;
  div {
    margin-bottom: 10px;
  }
  .title {
    font-size: 20px;
  }
  .info {
    font-size: 12px;
    margin-top:15px ;
    color: #99a2aa;
    span {
      display: inline-block;
      margin-left: 40px;
    }
    .type {
      margin-left: 10px;
    }
  }
  .content {
    margin-top: 20px;
    width: 100%;
    height: 100px;
    text-indent: 2em;
    word-wrap: break-word;
  }
}
</style>