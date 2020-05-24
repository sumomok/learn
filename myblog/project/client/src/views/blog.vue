<template>
    <div class="blog-content">
        <blog-Article></blog-Article>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import blogArticle from '../components/blog/blogArticle.vue';
    export default Vue.extend({
        components:{
            blogArticle,
        },
        mounted(){
            console.log(this)
        }
    })
</script>

<style scoped>
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