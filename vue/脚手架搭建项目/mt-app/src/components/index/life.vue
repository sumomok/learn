<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class>民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider></slider>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="login">
          <div class="m-life-login">
              <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt/>
              </h4>
            <p class="m-life-login-name">你好，{{$store.state.userName?$store.state.userName:'请登录'}}</p>
            <p v-if="$store.state.userName">
              <router-link :to="{name:'register'}">
                <el-button round>注册</el-button>
              </router-link>
            </p>
            <p v-if="$store.state.userName">
              <router-link :to="{name:'login'}">
                <el-button round>立即登录</el-button>
              </router-link>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="7" class="m-life-hotel"></el-col>
        <el-col :span="6" class="m-life-music"></el-col>
        <el-col :span="3" class="m-life-coop"></el-col>
        <el-col :span="6" >
            <div class="m-life-downapp">
                <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                <p>美团app手机版</p>
                <p class="last-p"><span class="red">一元起</span>吃喝玩乐</p>
            </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import slider from "@/components/index/slider.vue";
export default {
  components: {
    slider
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>