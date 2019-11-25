<template>
  <div class="page-register">
    <el-row class="header">
      <el-col class="header" :span="24">
        <header>
          <span class="site-logo"></span>
          <div class="login"><span class="bold">已有美团账号？</span><router-link tag="a" :to="{name:'login'}">登录</router-link></div>
        </header>
      </el-col>
    </el-row>
    <el-row class="content">
      <my-register></my-register>
    </el-row>
    <el-row><footer>©meituan.com  京ICP证070791号  京公网安备11010502025545号</footer></el-row>
  </div>
</template>

<script>
import myRegister from '../components/register/register.vue';
export default {
    components:{
        myRegister,
    }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>