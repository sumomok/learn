<template>
  <div class="wrapper">
    <div class="heard">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/learn">学习</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
</style>