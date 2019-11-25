<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active':item.active}">
        {{item.name}}
        <i :class="{'el-icon-d-caret':item.key == 's-price'}"></i>
      </li>
    </ul>
    <el-row v-for="(item,index) in list" :key="index">
      <m-item :meta="item"></m-item>
    </el-row>
  </div>
</template>

<script>
import mItem from "./item.vue";
import api from "@/api/index.js";
export default {
  created(){
    api.getGoodsList().then(res=>{
      this.list = res.data.data;
    })
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      list: []
    };
  },
  components: {
    mItem
  }
};
</script>

<style lang="scss">
</style>