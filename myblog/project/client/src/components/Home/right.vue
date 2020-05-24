<template>
  <div class="right">
    <div class="info">
      <div class="logo">
        <div class="myInfo">
          <img src="../../assets/logo.png" alt />
          <p class="mail">1037364144@qq.com</p>
          <p>坐标：济南</p>
          <p>技术栈：Vue、react、Typescript、nodejs</p>
          <p>现在是一名前端菜鸟</p>
          <p>励志做一名全栈工程师</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {}
});
</script>

<style lang="scss" scoped>
.right {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .info {
    flex: 0.5;
    // background: red;
    display: flex;
    justify-content: center;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 10px;
    }
    .myInfo {
      width: 300px;
      margin-top: 30px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 1px 1px 1px 1px #ccc;
      p {
        line-height: 30px;
      }
    }
  }
}
</style>