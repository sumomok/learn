<template>
  <div class="typelist">
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部文章" name="first">
          <blog-Abbreviation></blog-Abbreviation>
          <blog-Abbreviation></blog-Abbreviation>
          <blog-Abbreviation></blog-Abbreviation>
      </el-tab-pane>
      <el-tab-pane label="前端" name="second">
          <blog-Abbreviation></blog-Abbreviation>
      </el-tab-pane>
      <el-tab-pane label="nodejs" name="third">
          <blog-Abbreviation></blog-Abbreviation>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import Vue from 'vue';
import blogAbbreviation from '../Home/Article.vue'
export default Vue.extend({
    data(){
        return{
            activeName:"first",
        }
    },
    components:{
        blogAbbreviation,
    }
})
</script>