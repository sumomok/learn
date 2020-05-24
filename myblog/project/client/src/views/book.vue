<template>
  <div class="blog-content">
    <blog-content></blog-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import blogContent from "../components/blog/content.vue";

export default Vue.extend({
  components: {
    blogContent
  },
  mounted() {
    // console.log(this);
  }
});
</script>

<style lang="scss" scoped>
.blog-content {
  margin-top: 50px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px #ccc;
  border-radius: 10px;
}
</style>