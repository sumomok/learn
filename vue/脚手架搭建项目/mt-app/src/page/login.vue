<template>
  <div class="page-login">
    <el-row class="login-header">
      <el-col :span="24">
        <a class="logo" href="#"></a>
      </el-col>
    </el-row>
    <el-row class="login-panel">
      <el-col class="banner" :span="12">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </el-col>
      <el-col :span="12">
        <my-login></my-login>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col>
        <ul>
          <li>关于美团</li>
          <li>加入我们</li>
          <li>商家入驻</li>
          <li>帮助中心</li>
          <li>美团手机版</li>
        </ul>
      </el-col>
      <p>
        ©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </el-row>
  </div>
</template>

<script>
import myLogin from "@/components/login/login.vue";
export default {
  components: {
    myLogin
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>