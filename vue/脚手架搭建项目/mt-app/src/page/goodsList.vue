<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy />
        </el-row>
        <el-row>
          <m-list></m-list>
        </el-row>
      </el-col>
      <el-col :span="5">map+nav</el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from "@/components/products/crumbs.vue";
import categroy from "@/components/products/categroy.vue";
import mList from "@/components/products/list.vue";
export default {
  components: {
    crumbs,
    categroy,
    mList
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>