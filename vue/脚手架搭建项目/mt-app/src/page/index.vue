<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life></my-life>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-container :iStyleList="iStyleList" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import myMenu from "@/components/index/menu.vue";
import myLife from "@/components/index/life.vue";
import myContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyleList: [
        {
          text: "全部",
          tab: "all"
        },
        {
          text: "丽人SPA",
          tab: "spa"
        },
        {
          text: "电影演出",
          tab: "movie"
        },
        {
          text: "品质出游",
          tab: "travel"
        },
        {
          text: "约会聚餐",
          tab: "food"
        }
      ]
    };
  },
  components: {
    myMenu,
    myLife,
    myContainer
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>