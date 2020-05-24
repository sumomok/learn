<template>
  <div class="wrapper" id="wrapper">
    <blog-header></blog-header>
    <div class="content">
      <div class="left">
        <blog-left :leftlist="leftlist"></blog-left>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="right">
        <blog-right></blog-right>
      </div>
    </div>
    <el-backtop target=".wrapper"></el-backtop>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import blogHeader from "../components/Home/header.vue";
import blogLeft from "../components/Home/left.vue";
import blogRight from "../components/Home/right.vue";
export default Vue.extend({
  data() {
    return {
      // 左侧导航菜单  后期后台管理配置
      leftlist: [
        {
          iconClassName: "el-icon-collection",
          type:"",//router
          content: "文章推荐",
          id: 1
        },
        {
          iconClassName: "el-icon-share",
          content: "技术分享",
          type:"technology",
          id: 2
        },
        {
          iconClassName: "el-icon-edit",
          content: "学习笔记",
          type:"note",
          id: 3
        },
        {
          iconClassName: "el-icon-share",
          content: "问题分享",
          type:"problem",
          id: 4
        },
        {
          iconClassName: "el-icon-notebook-2",
          content: "读书笔记",
          type:"book",
          id: 5
        }
      ]
    };
  },
  components: {
    blogHeader,
    blogLeft,
    blogRight
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  // 要想 el-backtop生效必须给定固定的高且overflow-x:hidden;
  overflow-x: hidden;
  background: #eee;
  transition: all .5;
}
.content {
  display: flex;
  height: 100%;
  align-items: flex-start;
  align-content: space-between;
  @media screen and (max-width: 1235px) {
    width: 1235px;
  }
  .left {
    flex: 0.25;
    height: 100%;
  }
  .content {
    flex: 0.5;
  }
  .right {
    height: 100%;
    flex: 0.35;
  }
}
</style>