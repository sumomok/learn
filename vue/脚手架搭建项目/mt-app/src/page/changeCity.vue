<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问：" :list="recents" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>
<script>
import province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hot.vue";
import category from "@/components/changeCity/category.vue";
import api from "@/api/index.js";
export default {
  created() {
    api.getHotCity().then(res => {
      this.hotList = res.data.data;
    });
    api.getRecents().then(res => {
      this.recents = res.data.data;
    });
  },
  data() {
    return {
      hotList: [],
      recents: []
    };
  },
  components: {
    province,
    hot,
    category
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>