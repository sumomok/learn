<!--
 * @Author: your name
 * @Date: 2020-03-23 15:25:29
 * @LastEditTime: 2020-03-23 16:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\myblog\src\components\test1.vue
 -->
<template>
  <div>
    <span>这是仓库中的数据 {{this.$store.state.count}}</span>
    <button @click="handleClick">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.$store.commit("increment");
    }
  }
};
</script>

<style>
</style>