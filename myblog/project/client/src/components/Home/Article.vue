<template>
  <div class="article">
    <div class="title">{{ArticleData.title}}</div>
    <div class="content">{{ArticleData.content}}</div>
    <div class="footer">
      <span class="type">{{ArticleData.type}}</span>
      <span class="view">
        <i class="el-icon-view"></i>
        {{ArticleData.view}}万
      </span>
      <span class="like">
        <i class="el-icon-collection-tag"></i>
        {{ArticleData.like}}
      </span>
      <span class="reply">
        <i class="el-icon-chat-dot-round"></i>
        {{ArticleData.reply}}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { ArticleData } from "../../types/interface";
export default Vue.extend({
  data() {
    const Articlecontent: ArticleData = {
      title: "被砍眼科医生陶勇：那些伤害医生的人，我一个都不原谅",
      type: "技术分享",
      content:
        "被砍眼科医生陶勇：那些伤害医生的人，我一个都不原谅地方asdfasdfasddfsadfd撒发大水发士大夫撒地方是打发斯蒂芬胜多负少的发生",
      view: 27.6,
      like: 7146,
      reply: 2095
    };
    return {
      ArticleData:Articlecontent
    };
  },
  mounted() {
    // console.log(this);
  }
});
</script>
<style lang="scss" scoped>
.article {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  .title {
    font-size: 20px;
    margin-top: 10px;
  }
  .content {
    width: 550px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #99a2aa;
  }
  div {
    margin-top: 20px;
  }
  .footer {
    font-size: 12px;
    color: #99a2aa;
    span {
      display: inline-block;
      margin-left: 40px;
    }
    .type {
      margin-left: 0;
    }
  }
  border-bottom: 1px solid #ccc;
}
</style>