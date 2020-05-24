<template>
  <div class="learn">
    <div class="link">
      <router-link to="/about">AboutComp</router-link>
      <router-link to="/about/aboutComp1">AboutComp1</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>