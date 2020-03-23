<!--
 * @Author: your name
 * @Date: 2020-03-23 15:17:07
 * @LastEditTime: 2020-03-23 16:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\myblog\src\App.vue
 -->
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user">用户</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
